(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Xn(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const G={},vt=[],He=()=>{},yi=()=>!1,un=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Zn=e=>e.startsWith("onUpdate:"),ee=Object.assign,Qn=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},xi=Object.prototype.hasOwnProperty,V=(e,t)=>xi.call(e,t),I=Array.isArray,gt=e=>hn(e)==="[object Map]",io=e=>hn(e)==="[object Set]",L=e=>typeof e=="function",Q=e=>typeof e=="string",ze=e=>typeof e=="symbol",Y=e=>e!==null&&typeof e=="object",ro=e=>(Y(e)||L(e))&&L(e.then)&&L(e.catch),lo=Object.prototype.toString,hn=e=>lo.call(e),wi=e=>hn(e).slice(8,-1),co=e=>hn(e)==="[object Object]",es=e=>Q(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Mt=Xn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),pn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Ci=/-(\w)/g,Ae=pn(e=>e.replace(Ci,(t,n)=>n?n.toUpperCase():"")),Si=/\B([A-Z])/g,ht=pn(e=>e.replace(Si,"-$1").toLowerCase()),dn=pn(e=>e.charAt(0).toUpperCase()+e.slice(1)),Sn=pn(e=>e?`on${dn(e)}`:""),Je=(e,t)=>!Object.is(e,t),Tn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},fo=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},Ti=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Ei=e=>{const t=Q(e)?Number(e):NaN;return isNaN(t)?e:t};let Cs;const vn=()=>Cs||(Cs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ts(e){if(I(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],o=Q(s)?Ii(s):ts(s);if(o)for(const i in o)t[i]=o[i]}return t}else if(Q(e)||Y(e))return e}const Ai=/;(?![^(]*\))/g,Oi=/:([^]+)/,Mi=/\/\*[^]*?\*\//g;function Ii(e){const t={};return e.replace(Mi,"").split(Ai).forEach(n=>{if(n){const s=n.split(Oi);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function ns(e){let t="";if(Q(e))t=e;else if(I(e))for(let n=0;n<e.length;n++){const s=ns(e[n]);s&&(t+=s+" ")}else if(Y(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ri="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Pi=Xn(Ri);function ao(e){return!!e||e===""}const uo=e=>!!(e&&e.__v_isRef===!0),Et=e=>Q(e)?e:e==null?"":I(e)||Y(e)&&(e.toString===lo||!L(e.toString))?uo(e)?Et(e.value):JSON.stringify(e,ho,2):String(e),ho=(e,t)=>uo(t)?ho(e,t.value):gt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,o],i)=>(n[En(s,i)+" =>"]=o,n),{})}:io(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>En(n))}:ze(t)?En(t):Y(t)&&!I(t)&&!co(t)?String(t):t,En=(e,t="")=>{var n;return ze(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let we;class Fi{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=we,!t&&we&&(this.index=(we.scopes||(we.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=we;try{return we=this,t()}finally{we=n}}}on(){we=this}off(){we=this.parent}stop(t){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this._active=!1}}}function Li(){return we}let q;const An=new WeakSet;class po{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,we&&we.active&&we.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,An.has(this)&&(An.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||go(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ss(this),mo(this);const t=q,n=Ie;q=this,Ie=!0;try{return this.fn()}finally{_o(this),q=t,Ie=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)is(t);this.deps=this.depsTail=void 0,Ss(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?An.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){jn(this)&&this.run()}get dirty(){return jn(this)}}let vo=0,It,Rt;function go(e,t=!1){if(e.flags|=8,t){e.next=Rt,Rt=e;return}e.next=It,It=e}function ss(){vo++}function os(){if(--vo>0)return;if(Rt){let t=Rt;for(Rt=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;It;){let t=It;for(It=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function mo(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function _o(e){let t,n=e.depsTail,s=n;for(;s;){const o=s.prevDep;s.version===-1?(s===n&&(n=o),is(s),$i(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=o}e.deps=t,e.depsTail=n}function jn(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(bo(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function bo(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Lt))return;e.globalVersion=Lt;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!jn(e)){e.flags&=-3;return}const n=q,s=Ie;q=e,Ie=!0;try{mo(e);const o=e.fn(e._value);(t.version===0||Je(o,e._value))&&(e._value=o,t.version++)}catch(o){throw t.version++,o}finally{q=n,Ie=s,_o(e),e.flags&=-3}}function is(e,t=!1){const{dep:n,prevSub:s,nextSub:o}=e;if(s&&(s.nextSub=o,e.prevSub=void 0),o&&(o.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)is(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function $i(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Ie=!0;const yo=[];function Ze(){yo.push(Ie),Ie=!1}function Qe(){const e=yo.pop();Ie=e===void 0?!0:e}function Ss(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=q;q=void 0;try{t()}finally{q=n}}}let Lt=0;class Ni{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class rs{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!q||!Ie||q===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==q)n=this.activeLink=new Ni(q,this),q.deps?(n.prevDep=q.depsTail,q.depsTail.nextDep=n,q.depsTail=n):q.deps=q.depsTail=n,xo(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=q.depsTail,n.nextDep=void 0,q.depsTail.nextDep=n,q.depsTail=n,q.deps===n&&(q.deps=s)}return n}trigger(t){this.version++,Lt++,this.notify(t)}notify(t){ss();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{os()}}}function xo(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)xo(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const on=new WeakMap,at=Symbol(""),Bn=Symbol(""),$t=Symbol("");function fe(e,t,n){if(Ie&&q){let s=on.get(e);s||on.set(e,s=new Map);let o=s.get(n);o||(s.set(n,o=new rs),o.map=s,o.key=n),o.track()}}function Be(e,t,n,s,o,i){const r=on.get(e);if(!r){Lt++;return}const l=f=>{f&&f.trigger()};if(ss(),t==="clear")r.forEach(l);else{const f=I(e),h=f&&es(n);if(f&&n==="length"){const u=Number(s);r.forEach((p,b)=>{(b==="length"||b===$t||!ze(b)&&b>=u)&&l(p)})}else switch((n!==void 0||r.has(void 0))&&l(r.get(n)),h&&l(r.get($t)),t){case"add":f?h&&l(r.get("length")):(l(r.get(at)),gt(e)&&l(r.get(Bn)));break;case"delete":f||(l(r.get(at)),gt(e)&&l(r.get(Bn)));break;case"set":gt(e)&&l(r.get(at));break}}os()}function Hi(e,t){const n=on.get(e);return n&&n.get(t)}function pt(e){const t=D(e);return t===e?t:(fe(t,"iterate",$t),Ee(e)?t:t.map(ae))}function gn(e){return fe(e=D(e),"iterate",$t),e}const Di={__proto__:null,[Symbol.iterator](){return On(this,Symbol.iterator,ae)},concat(...e){return pt(this).concat(...e.map(t=>I(t)?pt(t):t))},entries(){return On(this,"entries",e=>(e[1]=ae(e[1]),e))},every(e,t){return De(this,"every",e,t,void 0,arguments)},filter(e,t){return De(this,"filter",e,t,n=>n.map(ae),arguments)},find(e,t){return De(this,"find",e,t,ae,arguments)},findIndex(e,t){return De(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return De(this,"findLast",e,t,ae,arguments)},findLastIndex(e,t){return De(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return De(this,"forEach",e,t,void 0,arguments)},includes(...e){return Mn(this,"includes",e)},indexOf(...e){return Mn(this,"indexOf",e)},join(e){return pt(this).join(e)},lastIndexOf(...e){return Mn(this,"lastIndexOf",e)},map(e,t){return De(this,"map",e,t,void 0,arguments)},pop(){return St(this,"pop")},push(...e){return St(this,"push",e)},reduce(e,...t){return Ts(this,"reduce",e,t)},reduceRight(e,...t){return Ts(this,"reduceRight",e,t)},shift(){return St(this,"shift")},some(e,t){return De(this,"some",e,t,void 0,arguments)},splice(...e){return St(this,"splice",e)},toReversed(){return pt(this).toReversed()},toSorted(e){return pt(this).toSorted(e)},toSpliced(...e){return pt(this).toSpliced(...e)},unshift(...e){return St(this,"unshift",e)},values(){return On(this,"values",ae)}};function On(e,t,n){const s=gn(e),o=s[t]();return s!==e&&!Ee(e)&&(o._next=o.next,o.next=()=>{const i=o._next();return i.value&&(i.value=n(i.value)),i}),o}const ji=Array.prototype;function De(e,t,n,s,o,i){const r=gn(e),l=r!==e&&!Ee(e),f=r[t];if(f!==ji[t]){const p=f.apply(e,i);return l?ae(p):p}let h=n;r!==e&&(l?h=function(p,b){return n.call(this,ae(p),b,e)}:n.length>2&&(h=function(p,b){return n.call(this,p,b,e)}));const u=f.call(r,h,s);return l&&o?o(u):u}function Ts(e,t,n,s){const o=gn(e);let i=n;return o!==e&&(Ee(e)?n.length>3&&(i=function(r,l,f){return n.call(this,r,l,f,e)}):i=function(r,l,f){return n.call(this,r,ae(l),f,e)}),o[t](i,...s)}function Mn(e,t,n){const s=D(e);fe(s,"iterate",$t);const o=s[t](...n);return(o===-1||o===!1)&&fs(n[0])?(n[0]=D(n[0]),s[t](...n)):o}function St(e,t,n=[]){Ze(),ss();const s=D(e)[t].apply(e,n);return os(),Qe(),s}const Bi=Xn("__proto__,__v_isRef,__isVue"),wo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ze));function zi(e){ze(e)||(e=String(e));const t=D(this);return fe(t,"has",e),t.hasOwnProperty(e)}class Co{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){const o=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!o;if(n==="__v_isReadonly")return o;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(o?i?Xi:Ao:i?Eo:To).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const r=I(t);if(!o){let f;if(r&&(f=Di[n]))return f;if(n==="hasOwnProperty")return zi}const l=Reflect.get(t,n,re(t)?t:s);return(ze(n)?wo.has(n):Bi(n))||(o||fe(t,"get",n),i)?l:re(l)?r&&es(n)?l:l.value:Y(l)?o?Oo(l):Nt(l):l}}class So extends Co{constructor(t=!1){super(!1,t)}set(t,n,s,o){let i=t[n];if(!this._isShallow){const f=ut(i);if(!Ee(s)&&!ut(s)&&(i=D(i),s=D(s)),!I(t)&&re(i)&&!re(s))return f?!1:(i.value=s,!0)}const r=I(t)&&es(n)?Number(n)<t.length:V(t,n),l=Reflect.set(t,n,s,re(t)?t:o);return t===D(o)&&(r?Je(s,i)&&Be(t,"set",n,s):Be(t,"add",n,s)),l}deleteProperty(t,n){const s=V(t,n);t[n];const o=Reflect.deleteProperty(t,n);return o&&s&&Be(t,"delete",n,void 0),o}has(t,n){const s=Reflect.has(t,n);return(!ze(n)||!wo.has(n))&&fe(t,"has",n),s}ownKeys(t){return fe(t,"iterate",I(t)?"length":at),Reflect.ownKeys(t)}}class Vi extends Co{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Ui=new So,ki=new Vi,Wi=new So(!0);const zn=e=>e,Gt=e=>Reflect.getPrototypeOf(e);function Ki(e,t,n){return function(...s){const o=this.__v_raw,i=D(o),r=gt(i),l=e==="entries"||e===Symbol.iterator&&r,f=e==="keys"&&r,h=o[e](...s),u=n?zn:t?Vn:ae;return!t&&fe(i,"iterate",f?Bn:at),{next(){const{value:p,done:b}=h.next();return b?{value:p,done:b}:{value:l?[u(p[0]),u(p[1])]:u(p),done:b}},[Symbol.iterator](){return this}}}}function Yt(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function qi(e,t){const n={get(o){const i=this.__v_raw,r=D(i),l=D(o);e||(Je(o,l)&&fe(r,"get",o),fe(r,"get",l));const{has:f}=Gt(r),h=t?zn:e?Vn:ae;if(f.call(r,o))return h(i.get(o));if(f.call(r,l))return h(i.get(l));i!==r&&i.get(o)},get size(){const o=this.__v_raw;return!e&&fe(D(o),"iterate",at),Reflect.get(o,"size",o)},has(o){const i=this.__v_raw,r=D(i),l=D(o);return e||(Je(o,l)&&fe(r,"has",o),fe(r,"has",l)),o===l?i.has(o):i.has(o)||i.has(l)},forEach(o,i){const r=this,l=r.__v_raw,f=D(l),h=t?zn:e?Vn:ae;return!e&&fe(f,"iterate",at),l.forEach((u,p)=>o.call(i,h(u),h(p),r))}};return ee(n,e?{add:Yt("add"),set:Yt("set"),delete:Yt("delete"),clear:Yt("clear")}:{add(o){!t&&!Ee(o)&&!ut(o)&&(o=D(o));const i=D(this);return Gt(i).has.call(i,o)||(i.add(o),Be(i,"add",o,o)),this},set(o,i){!t&&!Ee(i)&&!ut(i)&&(i=D(i));const r=D(this),{has:l,get:f}=Gt(r);let h=l.call(r,o);h||(o=D(o),h=l.call(r,o));const u=f.call(r,o);return r.set(o,i),h?Je(i,u)&&Be(r,"set",o,i):Be(r,"add",o,i),this},delete(o){const i=D(this),{has:r,get:l}=Gt(i);let f=r.call(i,o);f||(o=D(o),f=r.call(i,o)),l&&l.call(i,o);const h=i.delete(o);return f&&Be(i,"delete",o,void 0),h},clear(){const o=D(this),i=o.size!==0,r=o.clear();return i&&Be(o,"clear",void 0,void 0),r}}),["keys","values","entries",Symbol.iterator].forEach(o=>{n[o]=Ki(o,e,t)}),n}function ls(e,t){const n=qi(e,t);return(s,o,i)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?s:Reflect.get(V(n,o)&&o in s?n:s,o,i)}const Gi={get:ls(!1,!1)},Yi={get:ls(!1,!0)},Ji={get:ls(!0,!1)};const To=new WeakMap,Eo=new WeakMap,Ao=new WeakMap,Xi=new WeakMap;function Zi(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Qi(e){return e.__v_skip||!Object.isExtensible(e)?0:Zi(wi(e))}function Nt(e){return ut(e)?e:cs(e,!1,Ui,Gi,To)}function er(e){return cs(e,!1,Wi,Yi,Eo)}function Oo(e){return cs(e,!0,ki,Ji,Ao)}function cs(e,t,n,s,o){if(!Y(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=o.get(e);if(i)return i;const r=Qi(e);if(r===0)return e;const l=new Proxy(e,r===2?s:n);return o.set(e,l),l}function mt(e){return ut(e)?mt(e.__v_raw):!!(e&&e.__v_isReactive)}function ut(e){return!!(e&&e.__v_isReadonly)}function Ee(e){return!!(e&&e.__v_isShallow)}function fs(e){return e?!!e.__v_raw:!1}function D(e){const t=e&&e.__v_raw;return t?D(t):e}function tr(e){return!V(e,"__v_skip")&&Object.isExtensible(e)&&fo(e,"__v_skip",!0),e}const ae=e=>Y(e)?Nt(e):e,Vn=e=>Y(e)?Oo(e):e;function re(e){return e?e.__v_isRef===!0:!1}function At(e){return nr(e,!1)}function nr(e,t){return re(e)?e:new sr(e,t)}class sr{constructor(t,n){this.dep=new rs,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:D(t),this._value=n?t:ae(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||Ee(t)||ut(t);t=s?t:D(t),Je(t,n)&&(this._rawValue=t,this._value=s?t:ae(t),this.dep.trigger())}}function or(e){return re(e)?e.value:e}const ir={get:(e,t,n)=>t==="__v_raw"?e:or(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const o=e[t];return re(o)&&!re(n)?(o.value=n,!0):Reflect.set(e,t,n,s)}};function Mo(e){return mt(e)?e:new Proxy(e,ir)}function rr(e){const t=I(e)?new Array(e.length):{};for(const n in e)t[n]=cr(e,n);return t}class lr{constructor(t,n,s){this._object=t,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const t=this._object[this._key];return this._value=t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Hi(D(this._object),this._key)}}function cr(e,t,n){const s=e[t];return re(s)?s:new lr(e,t,n)}class fr{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new rs(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Lt-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&q!==this)return go(this,!0),!0}get value(){const t=this.dep.track();return bo(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function ar(e,t,n=!1){let s,o;return L(e)?s=e:(s=e.get,o=e.set),new fr(s,o,n)}const Jt={},rn=new WeakMap;let lt;function ur(e,t=!1,n=lt){if(n){let s=rn.get(n);s||rn.set(n,s=[]),s.push(e)}}function hr(e,t,n=G){const{immediate:s,deep:o,once:i,scheduler:r,augmentJob:l,call:f}=n,h=E=>o?E:Ee(E)||o===!1||o===0?Ge(E,1):Ge(E);let u,p,b,w,R=!1,O=!1;if(re(e)?(p=()=>e.value,R=Ee(e)):mt(e)?(p=()=>h(e),R=!0):I(e)?(O=!0,R=e.some(E=>mt(E)||Ee(E)),p=()=>e.map(E=>{if(re(E))return E.value;if(mt(E))return h(E);if(L(E))return f?f(E,2):E()})):L(e)?t?p=f?()=>f(e,2):e:p=()=>{if(b){Ze();try{b()}finally{Qe()}}const E=lt;lt=u;try{return f?f(e,3,[w]):e(w)}finally{lt=E}}:p=He,t&&o){const E=p,z=o===!0?1/0:o;p=()=>Ge(E(),z)}const N=Li(),F=()=>{u.stop(),N&&Qn(N.effects,u)};if(i&&t){const E=t;t=(...z)=>{E(...z),F()}}let j=O?new Array(e.length).fill(Jt):Jt;const B=E=>{if(!(!(u.flags&1)||!u.dirty&&!E))if(t){const z=u.run();if(o||R||(O?z.some((ne,he)=>Je(ne,j[he])):Je(z,j))){b&&b();const ne=lt;lt=u;try{const he=[z,j===Jt?void 0:O&&j[0]===Jt?[]:j,w];f?f(t,3,he):t(...he),j=z}finally{lt=ne}}}else u.run()};return l&&l(B),u=new po(p),u.scheduler=r?()=>r(B,!1):B,w=E=>ur(E,!1,u),b=u.onStop=()=>{const E=rn.get(u);if(E){if(f)f(E,4);else for(const z of E)z();rn.delete(u)}},t?s?B(!0):j=u.run():r?r(B.bind(null,!0),!0):u.run(),F.pause=u.pause.bind(u),F.resume=u.resume.bind(u),F.stop=F,F}function Ge(e,t=1/0,n){if(t<=0||!Y(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,re(e))Ge(e.value,t,n);else if(I(e))for(let s=0;s<e.length;s++)Ge(e[s],t,n);else if(io(e)||gt(e))e.forEach(s=>{Ge(s,t,n)});else if(co(e)){for(const s in e)Ge(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&Ge(e[s],t,n)}return e}/**
* @vue/runtime-core v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function kt(e,t,n,s){try{return s?e(...s):e()}catch(o){mn(o,t,n)}}function Re(e,t,n,s){if(L(e)){const o=kt(e,t,n,s);return o&&ro(o)&&o.catch(i=>{mn(i,t,n)}),o}if(I(e)){const o=[];for(let i=0;i<e.length;i++)o.push(Re(e[i],t,n,s));return o}}function mn(e,t,n,s=!0){const o=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:r}=t&&t.appContext.config||G;if(t){let l=t.parent;const f=t.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const u=l.ec;if(u){for(let p=0;p<u.length;p++)if(u[p](e,f,h)===!1)return}l=l.parent}if(i){Ze(),kt(i,null,10,[e,f,h]),Qe();return}}pr(e,n,o,s,r)}function pr(e,t,n,s=!0,o=!1){if(o)throw e;console.error(e)}const de=[];let $e=-1;const _t=[];let We=null,dt=0;const Io=Promise.resolve();let ln=null;function dr(e){const t=ln||Io;return e?t.then(this?e.bind(this):e):t}function vr(e){let t=$e+1,n=de.length;for(;t<n;){const s=t+n>>>1,o=de[s],i=Ht(o);i<e||i===e&&o.flags&2?t=s+1:n=s}return t}function as(e){if(!(e.flags&1)){const t=Ht(e),n=de[de.length-1];!n||!(e.flags&2)&&t>=Ht(n)?de.push(e):de.splice(vr(t),0,e),e.flags|=1,Ro()}}function Ro(){ln||(ln=Io.then(Fo))}function gr(e){I(e)?_t.push(...e):We&&e.id===-1?We.splice(dt+1,0,e):e.flags&1||(_t.push(e),e.flags|=1),Ro()}function Es(e,t,n=$e+1){for(;n<de.length;n++){const s=de[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;de.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Po(e){if(_t.length){const t=[...new Set(_t)].sort((n,s)=>Ht(n)-Ht(s));if(_t.length=0,We){We.push(...t);return}for(We=t,dt=0;dt<We.length;dt++){const n=We[dt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}We=null,dt=0}}const Ht=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Fo(e){try{for($e=0;$e<de.length;$e++){const t=de[$e];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),kt(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;$e<de.length;$e++){const t=de[$e];t&&(t.flags&=-2)}$e=-1,de.length=0,Po(),ln=null,(de.length||_t.length)&&Fo()}}let ue=null,Lo=null;function cn(e){const t=ue;return ue=e,Lo=e&&e.type.__scopeId||null,t}function Qt(e,t=ue,n){if(!t||e._n)return e;const s=(...o)=>{s._d&&Ns(-1);const i=cn(t);let r;try{r=e(...o)}finally{cn(i),s._d&&Ns(1)}return r};return s._n=!0,s._c=!0,s._d=!0,s}function st(e,t,n,s){const o=e.dirs,i=t&&t.dirs;for(let r=0;r<o.length;r++){const l=o[r];i&&(l.oldValue=i[r].value);let f=l.dir[s];f&&(Ze(),Re(f,n,8,[e.el,l,e,t]),Qe())}}const mr=Symbol("_vte"),$o=e=>e.__isTeleport,Ke=Symbol("_leaveCb"),Xt=Symbol("_enterCb");function _r(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return us(()=>{e.isMounted=!0}),ko(()=>{e.isUnmounting=!0}),e}const Te=[Function,Array],No={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Te,onEnter:Te,onAfterEnter:Te,onEnterCancelled:Te,onBeforeLeave:Te,onLeave:Te,onAfterLeave:Te,onLeaveCancelled:Te,onBeforeAppear:Te,onAppear:Te,onAfterAppear:Te,onAppearCancelled:Te},Ho=e=>{const t=e.subTree;return t.component?Ho(t.component):t},br={name:"BaseTransition",props:No,setup(e,{slots:t}){const n=bl(),s=_r();return()=>{const o=t.default&&Bo(t.default(),!0);if(!o||!o.length)return;const i=Do(o),r=D(e),{mode:l}=r;if(s.isLeaving)return In(i);const f=As(i);if(!f)return In(i);let h=Un(f,r,s,n,b=>h=b);f.type!==ge&&Dt(f,h);const u=n.subTree,p=u&&As(u);if(p&&p.type!==ge&&!ct(f,p)&&Ho(n).type!==ge){const b=Un(p,r,s,n);if(Dt(p,b),l==="out-in"&&f.type!==ge)return s.isLeaving=!0,b.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete b.afterLeave},In(i);l==="in-out"&&f.type!==ge&&(b.delayLeave=(w,R,O)=>{const N=jo(s,p);N[String(p.key)]=p,w[Ke]=()=>{R(),w[Ke]=void 0,delete h.delayedLeave},h.delayedLeave=O})}return i}}};function Do(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==ge){t=n;break}}return t}const yr=br;function jo(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function Un(e,t,n,s,o){const{appear:i,mode:r,persisted:l=!1,onBeforeEnter:f,onEnter:h,onAfterEnter:u,onEnterCancelled:p,onBeforeLeave:b,onLeave:w,onAfterLeave:R,onLeaveCancelled:O,onBeforeAppear:N,onAppear:F,onAfterAppear:j,onAppearCancelled:B}=t,E=String(e.key),z=jo(n,e),ne=($,k)=>{$&&Re($,s,9,k)},he=($,k)=>{const X=k[1];ne($,k),I($)?$.every(T=>T.length<=1)&&X():$.length<=1&&X()},me={mode:r,persisted:l,beforeEnter($){let k=f;if(!n.isMounted)if(i)k=N||f;else return;$[Ke]&&$[Ke](!0);const X=z[E];X&&ct(e,X)&&X.el[Ke]&&X.el[Ke](),ne(k,[$])},enter($){let k=h,X=u,T=p;if(!n.isMounted)if(i)k=F||h,X=j||u,T=B||p;else return;let J=!1;const le=$[Xt]=et=>{J||(J=!0,et?ne(T,[$]):ne(X,[$]),me.delayedLeave&&me.delayedLeave(),$[Xt]=void 0)};k?he(k,[$,le]):le()},leave($,k){const X=String(e.key);if($[Xt]&&$[Xt](!0),n.isUnmounting)return k();ne(b,[$]);let T=!1;const J=$[Ke]=le=>{T||(T=!0,k(),le?ne(O,[$]):ne(R,[$]),$[Ke]=void 0,z[X]===e&&delete z[X])};z[X]=e,w?he(w,[$,J]):J()},clone($){const k=Un($,t,n,s,o);return o&&o(k),k}};return me}function In(e){if(_n(e))return e=Xe(e),e.children=null,e}function As(e){if(!_n(e))return $o(e.type)&&e.children?Do(e.children):e;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&L(n.default))return n.default()}}function Dt(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Dt(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Bo(e,t=!1,n){let s=[],o=0;for(let i=0;i<e.length;i++){let r=e[i];const l=n==null?r.key:String(n)+String(r.key!=null?r.key:i);r.type===ve?(r.patchFlag&128&&o++,s=s.concat(Bo(r.children,t,l))):(t||r.type!==ge)&&s.push(l!=null?Xe(r,{key:l}):r)}if(o>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function xr(e,t){return L(e)?ee({name:e.name},t,{setup:e}):e}function zo(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function kn(e,t,n,s,o=!1){if(I(e)){e.forEach((R,O)=>kn(R,t&&(I(t)?t[O]:t),n,s,o));return}if(bt(s)&&!o)return;const i=s.shapeFlag&4?vs(s.component):s.el,r=o?null:i,{i:l,r:f}=e,h=t&&t.r,u=l.refs===G?l.refs={}:l.refs,p=l.setupState,b=D(p),w=p===G?()=>!1:R=>V(b,R);if(h!=null&&h!==f&&(Q(h)?(u[h]=null,w(h)&&(p[h]=null)):re(h)&&(h.value=null)),L(f))kt(f,l,12,[r,u]);else{const R=Q(f),O=re(f);if(R||O){const N=()=>{if(e.f){const F=R?w(f)?p[f]:u[f]:f.value;o?I(F)&&Qn(F,i):I(F)?F.includes(i)||F.push(i):R?(u[f]=[i],w(f)&&(p[f]=u[f])):(f.value=[i],e.k&&(u[e.k]=f.value))}else R?(u[f]=r,w(f)&&(p[f]=r)):O&&(f.value=r,e.k&&(u[e.k]=r))};r?(N.id=-1,xe(N,n)):N()}}}vn().requestIdleCallback;vn().cancelIdleCallback;const bt=e=>!!e.type.__asyncLoader,_n=e=>e.type.__isKeepAlive;function wr(e,t){Vo(e,"a",t)}function Cr(e,t){Vo(e,"da",t)}function Vo(e,t,n=ie){const s=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(bn(t,s,n),n){let o=n.parent;for(;o&&o.parent;)_n(o.parent.vnode)&&Sr(s,t,n,o),o=o.parent}}function Sr(e,t,n,s){const o=bn(t,e,s,!0);Wo(()=>{Qn(s[t],o)},n)}function bn(e,t,n=ie,s=!1){if(n){const o=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...r)=>{Ze();const l=Wt(n),f=Re(t,n,e,r);return l(),Qe(),f});return s?o.unshift(i):o.push(i),i}}const Ve=e=>(t,n=ie)=>{(!Vt||e==="sp")&&bn(e,(...s)=>t(...s),n)},Tr=Ve("bm"),us=Ve("m"),Er=Ve("bu"),Uo=Ve("u"),ko=Ve("bum"),Wo=Ve("um"),Ar=Ve("sp"),Or=Ve("rtg"),Mr=Ve("rtc");function Ir(e,t=ie){bn("ec",e,t)}const Rr="components";function Pr(e,t){return Lr(Rr,e,!0,t)||e}const Fr=Symbol.for("v-ndc");function Lr(e,t,n=!0,s=!1){const o=ue||ie;if(o){const i=o.type;{const l=Sl(i,!1);if(l&&(l===t||l===Ae(t)||l===dn(Ae(t))))return i}const r=Os(o[e]||i[e],t)||Os(o.appContext[e],t);return!r&&s?i:r}}function Os(e,t){return e&&(e[t]||e[Ae(t)]||e[dn(Ae(t))])}function $r(e,t,n,s){let o;const i=n,r=I(e);if(r||Q(e)){const l=r&&mt(e);let f=!1;l&&(f=!Ee(e),e=gn(e)),o=new Array(e.length);for(let h=0,u=e.length;h<u;h++)o[h]=t(f?ae(e[h]):e[h],h,void 0,i)}else if(typeof e=="number"){o=new Array(e);for(let l=0;l<e;l++)o[l]=t(l+1,l,void 0,i)}else if(Y(e))if(e[Symbol.iterator])o=Array.from(e,(l,f)=>t(l,f,void 0,i));else{const l=Object.keys(e);o=new Array(l.length);for(let f=0,h=l.length;f<h;f++){const u=l[f];o[f]=t(e[u],u,f,i)}}else o=[];return o}function Ko(e,t,n={},s,o){if(ue.ce||ue.parent&&bt(ue.parent)&&ue.parent.ce)return Ce(),Bt(ve,null,[oe("slot",n,s)],64);let i=e[t];i&&i._c&&(i._d=!1),Ce();const r=i&&qo(i(n)),l=n.key||r&&r.key,f=Bt(ve,{key:(l&&!ze(l)?l:`_${t}`)+(!r&&s?"_fb":"")},r||[],r&&e._===1?64:-2);return i&&i._c&&(i._d=!0),f}function qo(e){return e.some(t=>zt(t)?!(t.type===ge||t.type===ve&&!qo(t.children)):!0)?e:null}const Wn=e=>e?pi(e)?vs(e):Wn(e.parent):null,Pt=ee(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Wn(e.parent),$root:e=>Wn(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>hs(e),$forceUpdate:e=>e.f||(e.f=()=>{as(e.update)}),$nextTick:e=>e.n||(e.n=dr.bind(e.proxy)),$watch:e=>sl.bind(e)}),Rn=(e,t)=>e!==G&&!e.__isScriptSetup&&V(e,t),Nr={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:o,props:i,accessCache:r,type:l,appContext:f}=e;let h;if(t[0]!=="$"){const w=r[t];if(w!==void 0)switch(w){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return i[t]}else{if(Rn(s,t))return r[t]=1,s[t];if(o!==G&&V(o,t))return r[t]=2,o[t];if((h=e.propsOptions[0])&&V(h,t))return r[t]=3,i[t];if(n!==G&&V(n,t))return r[t]=4,n[t];Kn&&(r[t]=0)}}const u=Pt[t];let p,b;if(u)return t==="$attrs"&&fe(e.attrs,"get",""),u(e);if((p=l.__cssModules)&&(p=p[t]))return p;if(n!==G&&V(n,t))return r[t]=4,n[t];if(b=f.config.globalProperties,V(b,t))return b[t]},set({_:e},t,n){const{data:s,setupState:o,ctx:i}=e;return Rn(o,t)?(o[t]=n,!0):s!==G&&V(s,t)?(s[t]=n,!0):V(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:o,propsOptions:i}},r){let l;return!!n[r]||e!==G&&V(e,r)||Rn(t,r)||(l=i[0])&&V(l,r)||V(s,r)||V(Pt,r)||V(o.config.globalProperties,r)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:V(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ms(e){return I(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Kn=!0;function Hr(e){const t=hs(e),n=e.proxy,s=e.ctx;Kn=!1,t.beforeCreate&&Is(t.beforeCreate,e,"bc");const{data:o,computed:i,methods:r,watch:l,provide:f,inject:h,created:u,beforeMount:p,mounted:b,beforeUpdate:w,updated:R,activated:O,deactivated:N,beforeDestroy:F,beforeUnmount:j,destroyed:B,unmounted:E,render:z,renderTracked:ne,renderTriggered:he,errorCaptured:me,serverPrefetch:$,expose:k,inheritAttrs:X,components:T,directives:J,filters:le}=t;if(h&&Dr(h,s,null),r)for(const Z in r){const W=r[Z];L(W)&&(s[Z]=W.bind(n))}if(o){const Z=o.call(n,n);Y(Z)&&(e.data=Nt(Z))}if(Kn=!0,i)for(const Z in i){const W=i[Z],tt=L(W)?W.bind(n,n):L(W.get)?W.get.bind(n,n):He,Kt=!L(W)&&L(W.set)?W.set.bind(n):He,nt=Me({get:tt,set:Kt});Object.defineProperty(s,Z,{enumerable:!0,configurable:!0,get:()=>nt.value,set:Pe=>nt.value=Pe})}if(l)for(const Z in l)Go(l[Z],s,n,Z);if(f){const Z=L(f)?f.call(n):f;Reflect.ownKeys(Z).forEach(W=>{kr(W,Z[W])})}u&&Is(u,e,"c");function se(Z,W){I(W)?W.forEach(tt=>Z(tt.bind(n))):W&&Z(W.bind(n))}if(se(Tr,p),se(us,b),se(Er,w),se(Uo,R),se(wr,O),se(Cr,N),se(Ir,me),se(Mr,ne),se(Or,he),se(ko,j),se(Wo,E),se(Ar,$),I(k))if(k.length){const Z=e.exposed||(e.exposed={});k.forEach(W=>{Object.defineProperty(Z,W,{get:()=>n[W],set:tt=>n[W]=tt})})}else e.exposed||(e.exposed={});z&&e.render===He&&(e.render=z),X!=null&&(e.inheritAttrs=X),T&&(e.components=T),J&&(e.directives=J),$&&zo(e)}function Dr(e,t,n=He){I(e)&&(e=qn(e));for(const s in e){const o=e[s];let i;Y(o)?"default"in o?i=en(o.from||s,o.default,!0):i=en(o.from||s):i=en(o),re(i)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:r=>i.value=r}):t[s]=i}}function Is(e,t,n){Re(I(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function Go(e,t,n,s){let o=s.includes(".")?ci(n,s):()=>n[s];if(Q(e)){const i=t[e];L(i)&&Fn(o,i)}else if(L(e))Fn(o,e.bind(n));else if(Y(e))if(I(e))e.forEach(i=>Go(i,t,n,s));else{const i=L(e.handler)?e.handler.bind(n):t[e.handler];L(i)&&Fn(o,i,e)}}function hs(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:o,optionsCache:i,config:{optionMergeStrategies:r}}=e.appContext,l=i.get(t);let f;return l?f=l:!o.length&&!n&&!s?f=t:(f={},o.length&&o.forEach(h=>fn(f,h,r,!0)),fn(f,t,r)),Y(t)&&i.set(t,f),f}function fn(e,t,n,s=!1){const{mixins:o,extends:i}=t;i&&fn(e,i,n,!0),o&&o.forEach(r=>fn(e,r,n,!0));for(const r in t)if(!(s&&r==="expose")){const l=jr[r]||n&&n[r];e[r]=l?l(e[r],t[r]):t[r]}return e}const jr={data:Rs,props:Ps,emits:Ps,methods:Ot,computed:Ot,beforeCreate:pe,created:pe,beforeMount:pe,mounted:pe,beforeUpdate:pe,updated:pe,beforeDestroy:pe,beforeUnmount:pe,destroyed:pe,unmounted:pe,activated:pe,deactivated:pe,errorCaptured:pe,serverPrefetch:pe,components:Ot,directives:Ot,watch:zr,provide:Rs,inject:Br};function Rs(e,t){return t?e?function(){return ee(L(e)?e.call(this,this):e,L(t)?t.call(this,this):t)}:t:e}function Br(e,t){return Ot(qn(e),qn(t))}function qn(e){if(I(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function pe(e,t){return e?[...new Set([].concat(e,t))]:t}function Ot(e,t){return e?ee(Object.create(null),e,t):t}function Ps(e,t){return e?I(e)&&I(t)?[...new Set([...e,...t])]:ee(Object.create(null),Ms(e),Ms(t??{})):t}function zr(e,t){if(!e)return t;if(!t)return e;const n=ee(Object.create(null),e);for(const s in t)n[s]=pe(e[s],t[s]);return n}function Yo(){return{app:null,config:{isNativeTag:yi,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Vr=0;function Ur(e,t){return function(s,o=null){L(s)||(s=ee({},s)),o!=null&&!Y(o)&&(o=null);const i=Yo(),r=new WeakSet,l=[];let f=!1;const h=i.app={_uid:Vr++,_component:s,_props:o,_container:null,_context:i,_instance:null,version:El,get config(){return i.config},set config(u){},use(u,...p){return r.has(u)||(u&&L(u.install)?(r.add(u),u.install(h,...p)):L(u)&&(r.add(u),u(h,...p))),h},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),h},component(u,p){return p?(i.components[u]=p,h):i.components[u]},directive(u,p){return p?(i.directives[u]=p,h):i.directives[u]},mount(u,p,b){if(!f){const w=h._ceVNode||oe(s,o);return w.appContext=i,b===!0?b="svg":b===!1&&(b=void 0),p&&t?t(w,u):e(w,u,b),f=!0,h._container=u,u.__vue_app__=h,vs(w.component)}},onUnmount(u){l.push(u)},unmount(){f&&(Re(l,h._instance,16),e(null,h._container),delete h._container.__vue_app__)},provide(u,p){return i.provides[u]=p,h},runWithContext(u){const p=yt;yt=h;try{return u()}finally{yt=p}}};return h}}let yt=null;function kr(e,t){if(ie){let n=ie.provides;const s=ie.parent&&ie.parent.provides;s===n&&(n=ie.provides=Object.create(s)),n[e]=t}}function en(e,t,n=!1){const s=ie||ue;if(s||yt){const o=yt?yt._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(o&&e in o)return o[e];if(arguments.length>1)return n&&L(t)?t.call(s&&s.proxy):t}}const Jo={},Xo=()=>Object.create(Jo),Zo=e=>Object.getPrototypeOf(e)===Jo;function Wr(e,t,n,s=!1){const o={},i=Xo();e.propsDefaults=Object.create(null),Qo(e,t,o,i);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);n?e.props=s?o:er(o):e.type.props?e.props=o:e.props=i,e.attrs=i}function Kr(e,t,n,s){const{props:o,attrs:i,vnode:{patchFlag:r}}=e,l=D(o),[f]=e.propsOptions;let h=!1;if((s||r>0)&&!(r&16)){if(r&8){const u=e.vnode.dynamicProps;for(let p=0;p<u.length;p++){let b=u[p];if(yn(e.emitsOptions,b))continue;const w=t[b];if(f)if(V(i,b))w!==i[b]&&(i[b]=w,h=!0);else{const R=Ae(b);o[R]=Gn(f,l,R,w,e,!1)}else w!==i[b]&&(i[b]=w,h=!0)}}}else{Qo(e,t,o,i)&&(h=!0);let u;for(const p in l)(!t||!V(t,p)&&((u=ht(p))===p||!V(t,u)))&&(f?n&&(n[p]!==void 0||n[u]!==void 0)&&(o[p]=Gn(f,l,p,void 0,e,!0)):delete o[p]);if(i!==l)for(const p in i)(!t||!V(t,p))&&(delete i[p],h=!0)}h&&Be(e.attrs,"set","")}function Qo(e,t,n,s){const[o,i]=e.propsOptions;let r=!1,l;if(t)for(let f in t){if(Mt(f))continue;const h=t[f];let u;o&&V(o,u=Ae(f))?!i||!i.includes(u)?n[u]=h:(l||(l={}))[u]=h:yn(e.emitsOptions,f)||(!(f in s)||h!==s[f])&&(s[f]=h,r=!0)}if(i){const f=D(n),h=l||G;for(let u=0;u<i.length;u++){const p=i[u];n[p]=Gn(o,f,p,h[p],e,!V(h,p))}}return r}function Gn(e,t,n,s,o,i){const r=e[n];if(r!=null){const l=V(r,"default");if(l&&s===void 0){const f=r.default;if(r.type!==Function&&!r.skipFactory&&L(f)){const{propsDefaults:h}=o;if(n in h)s=h[n];else{const u=Wt(o);s=h[n]=f.call(null,t),u()}}else s=f;o.ce&&o.ce._setProp(n,s)}r[0]&&(i&&!l?s=!1:r[1]&&(s===""||s===ht(n))&&(s=!0))}return s}const qr=new WeakMap;function ei(e,t,n=!1){const s=n?qr:t.propsCache,o=s.get(e);if(o)return o;const i=e.props,r={},l=[];let f=!1;if(!L(e)){const u=p=>{f=!0;const[b,w]=ei(p,t,!0);ee(r,b),w&&l.push(...w)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!f)return Y(e)&&s.set(e,vt),vt;if(I(i))for(let u=0;u<i.length;u++){const p=Ae(i[u]);Fs(p)&&(r[p]=G)}else if(i)for(const u in i){const p=Ae(u);if(Fs(p)){const b=i[u],w=r[p]=I(b)||L(b)?{type:b}:ee({},b),R=w.type;let O=!1,N=!0;if(I(R))for(let F=0;F<R.length;++F){const j=R[F],B=L(j)&&j.name;if(B==="Boolean"){O=!0;break}else B==="String"&&(N=!1)}else O=L(R)&&R.name==="Boolean";w[0]=O,w[1]=N,(O||V(w,"default"))&&l.push(p)}}const h=[r,l];return Y(e)&&s.set(e,h),h}function Fs(e){return e[0]!=="$"&&!Mt(e)}const ti=e=>e[0]==="_"||e==="$stable",ps=e=>I(e)?e.map(Ne):[Ne(e)],Gr=(e,t,n)=>{if(t._n)return t;const s=Qt((...o)=>ps(t(...o)),n);return s._c=!1,s},ni=(e,t,n)=>{const s=e._ctx;for(const o in e){if(ti(o))continue;const i=e[o];if(L(i))t[o]=Gr(o,i,s);else if(i!=null){const r=ps(i);t[o]=()=>r}}},si=(e,t)=>{const n=ps(t);e.slots.default=()=>n},oi=(e,t,n)=>{for(const s in t)(n||s!=="_")&&(e[s]=t[s])},Yr=(e,t,n)=>{const s=e.slots=Xo();if(e.vnode.shapeFlag&32){const o=t._;o?(oi(s,t,n),n&&fo(s,"_",o,!0)):ni(t,s)}else t&&si(e,t)},Jr=(e,t,n)=>{const{vnode:s,slots:o}=e;let i=!0,r=G;if(s.shapeFlag&32){const l=t._;l?n&&l===1?i=!1:oi(o,t,n):(i=!t.$stable,ni(t,o)),r=t}else t&&(si(e,t),r={default:1});if(i)for(const l in o)!ti(l)&&r[l]==null&&delete o[l]},xe=al;function Xr(e){return Zr(e)}function Zr(e,t){const n=vn();n.__VUE__=!0;const{insert:s,remove:o,patchProp:i,createElement:r,createText:l,createComment:f,setText:h,setElementText:u,parentNode:p,nextSibling:b,setScopeId:w=He,insertStaticContent:R}=e,O=(c,a,d,m=null,v=null,g=null,C=void 0,x=null,y=!!a.dynamicChildren)=>{if(c===a)return;c&&!ct(c,a)&&(m=qt(c),Pe(c,v,g,!0),c=null),a.patchFlag===-2&&(y=!1,a.dynamicChildren=null);const{type:_,ref:M,shapeFlag:S}=a;switch(_){case xn:N(c,a,d,m);break;case ge:F(c,a,d,m);break;case $n:c==null&&j(a,d,m,C);break;case ve:T(c,a,d,m,v,g,C,x,y);break;default:S&1?z(c,a,d,m,v,g,C,x,y):S&6?J(c,a,d,m,v,g,C,x,y):(S&64||S&128)&&_.process(c,a,d,m,v,g,C,x,y,wt)}M!=null&&v&&kn(M,c&&c.ref,g,a||c,!a)},N=(c,a,d,m)=>{if(c==null)s(a.el=l(a.children),d,m);else{const v=a.el=c.el;a.children!==c.children&&h(v,a.children)}},F=(c,a,d,m)=>{c==null?s(a.el=f(a.children||""),d,m):a.el=c.el},j=(c,a,d,m)=>{[c.el,c.anchor]=R(c.children,a,d,m,c.el,c.anchor)},B=({el:c,anchor:a},d,m)=>{let v;for(;c&&c!==a;)v=b(c),s(c,d,m),c=v;s(a,d,m)},E=({el:c,anchor:a})=>{let d;for(;c&&c!==a;)d=b(c),o(c),c=d;o(a)},z=(c,a,d,m,v,g,C,x,y)=>{a.type==="svg"?C="svg":a.type==="math"&&(C="mathml"),c==null?ne(a,d,m,v,g,C,x,y):$(c,a,v,g,C,x,y)},ne=(c,a,d,m,v,g,C,x)=>{let y,_;const{props:M,shapeFlag:S,transition:A,dirs:P}=c;if(y=c.el=r(c.type,g,M&&M.is,M),S&8?u(y,c.children):S&16&&me(c.children,y,null,m,v,Pn(c,g),C,x),P&&st(c,null,m,"created"),he(y,c,c.scopeId,C,m),M){for(const K in M)K!=="value"&&!Mt(K)&&i(y,K,null,M[K],g,m);"value"in M&&i(y,"value",null,M.value,g),(_=M.onVnodeBeforeMount)&&Le(_,m,c)}P&&st(c,null,m,"beforeMount");const H=Qr(v,A);H&&A.beforeEnter(y),s(y,a,d),((_=M&&M.onVnodeMounted)||H||P)&&xe(()=>{_&&Le(_,m,c),H&&A.enter(y),P&&st(c,null,m,"mounted")},v)},he=(c,a,d,m,v)=>{if(d&&w(c,d),m)for(let g=0;g<m.length;g++)w(c,m[g]);if(v){let g=v.subTree;if(a===g||ai(g.type)&&(g.ssContent===a||g.ssFallback===a)){const C=v.vnode;he(c,C,C.scopeId,C.slotScopeIds,v.parent)}}},me=(c,a,d,m,v,g,C,x,y=0)=>{for(let _=y;_<c.length;_++){const M=c[_]=x?qe(c[_]):Ne(c[_]);O(null,M,a,d,m,v,g,C,x)}},$=(c,a,d,m,v,g,C)=>{const x=a.el=c.el;let{patchFlag:y,dynamicChildren:_,dirs:M}=a;y|=c.patchFlag&16;const S=c.props||G,A=a.props||G;let P;if(d&&ot(d,!1),(P=A.onVnodeBeforeUpdate)&&Le(P,d,a,c),M&&st(a,c,d,"beforeUpdate"),d&&ot(d,!0),(S.innerHTML&&A.innerHTML==null||S.textContent&&A.textContent==null)&&u(x,""),_?k(c.dynamicChildren,_,x,d,m,Pn(a,v),g):C||W(c,a,x,null,d,m,Pn(a,v),g,!1),y>0){if(y&16)X(x,S,A,d,v);else if(y&2&&S.class!==A.class&&i(x,"class",null,A.class,v),y&4&&i(x,"style",S.style,A.style,v),y&8){const H=a.dynamicProps;for(let K=0;K<H.length;K++){const U=H[K],_e=S[U],ce=A[U];(ce!==_e||U==="value")&&i(x,U,_e,ce,v,d)}}y&1&&c.children!==a.children&&u(x,a.children)}else!C&&_==null&&X(x,S,A,d,v);((P=A.onVnodeUpdated)||M)&&xe(()=>{P&&Le(P,d,a,c),M&&st(a,c,d,"updated")},m)},k=(c,a,d,m,v,g,C)=>{for(let x=0;x<a.length;x++){const y=c[x],_=a[x],M=y.el&&(y.type===ve||!ct(y,_)||y.shapeFlag&70)?p(y.el):d;O(y,_,M,null,m,v,g,C,!0)}},X=(c,a,d,m,v)=>{if(a!==d){if(a!==G)for(const g in a)!Mt(g)&&!(g in d)&&i(c,g,a[g],null,v,m);for(const g in d){if(Mt(g))continue;const C=d[g],x=a[g];C!==x&&g!=="value"&&i(c,g,x,C,v,m)}"value"in d&&i(c,"value",a.value,d.value,v)}},T=(c,a,d,m,v,g,C,x,y)=>{const _=a.el=c?c.el:l(""),M=a.anchor=c?c.anchor:l("");let{patchFlag:S,dynamicChildren:A,slotScopeIds:P}=a;P&&(x=x?x.concat(P):P),c==null?(s(_,d,m),s(M,d,m),me(a.children||[],d,M,v,g,C,x,y)):S>0&&S&64&&A&&c.dynamicChildren?(k(c.dynamicChildren,A,d,v,g,C,x),(a.key!=null||v&&a===v.subTree)&&ii(c,a,!0)):W(c,a,d,M,v,g,C,x,y)},J=(c,a,d,m,v,g,C,x,y)=>{a.slotScopeIds=x,c==null?a.shapeFlag&512?v.ctx.activate(a,d,m,C,y):le(a,d,m,v,g,C,y):et(c,a,y)},le=(c,a,d,m,v,g,C)=>{const x=c.component=_l(c,m,v);if(_n(c)&&(x.ctx.renderer=wt),yl(x,!1,C),x.asyncDep){if(v&&v.registerDep(x,se,C),!c.el){const y=x.subTree=oe(ge);F(null,y,a,d)}}else se(x,c,a,d,v,g,C)},et=(c,a,d)=>{const m=a.component=c.component;if(cl(c,a,d))if(m.asyncDep&&!m.asyncResolved){Z(m,a,d);return}else m.next=a,m.update();else a.el=c.el,m.vnode=a},se=(c,a,d,m,v,g,C)=>{const x=()=>{if(c.isMounted){let{next:S,bu:A,u:P,parent:H,vnode:K}=c;{const be=ri(c);if(be){S&&(S.el=K.el,Z(c,S,C)),be.asyncDep.then(()=>{c.isUnmounted||x()});return}}let U=S,_e;ot(c,!1),S?(S.el=K.el,Z(c,S,C)):S=K,A&&Tn(A),(_e=S.props&&S.props.onVnodeBeforeUpdate)&&Le(_e,H,S,K),ot(c,!0);const ce=Ln(c),Oe=c.subTree;c.subTree=ce,O(Oe,ce,p(Oe.el),qt(Oe),c,v,g),S.el=ce.el,U===null&&fl(c,ce.el),P&&xe(P,v),(_e=S.props&&S.props.onVnodeUpdated)&&xe(()=>Le(_e,H,S,K),v)}else{let S;const{el:A,props:P}=a,{bm:H,m:K,parent:U,root:_e,type:ce}=c,Oe=bt(a);if(ot(c,!1),H&&Tn(H),!Oe&&(S=P&&P.onVnodeBeforeMount)&&Le(S,U,a),ot(c,!0),A&&ys){const be=()=>{c.subTree=Ln(c),ys(A,c.subTree,c,v,null)};Oe&&ce.__asyncHydrate?ce.__asyncHydrate(A,c,be):be()}else{_e.ce&&_e.ce._injectChildStyle(ce);const be=c.subTree=Ln(c);O(null,be,d,m,c,v,g),a.el=be.el}if(K&&xe(K,v),!Oe&&(S=P&&P.onVnodeMounted)){const be=a;xe(()=>Le(S,U,be),v)}(a.shapeFlag&256||U&&bt(U.vnode)&&U.vnode.shapeFlag&256)&&c.a&&xe(c.a,v),c.isMounted=!0,a=d=m=null}};c.scope.on();const y=c.effect=new po(x);c.scope.off();const _=c.update=y.run.bind(y),M=c.job=y.runIfDirty.bind(y);M.i=c,M.id=c.uid,y.scheduler=()=>as(M),ot(c,!0),_()},Z=(c,a,d)=>{a.component=c;const m=c.vnode.props;c.vnode=a,c.next=null,Kr(c,a.props,m,d),Jr(c,a.children,d),Ze(),Es(c),Qe()},W=(c,a,d,m,v,g,C,x,y=!1)=>{const _=c&&c.children,M=c?c.shapeFlag:0,S=a.children,{patchFlag:A,shapeFlag:P}=a;if(A>0){if(A&128){Kt(_,S,d,m,v,g,C,x,y);return}else if(A&256){tt(_,S,d,m,v,g,C,x,y);return}}P&8?(M&16&&xt(_,v,g),S!==_&&u(d,S)):M&16?P&16?Kt(_,S,d,m,v,g,C,x,y):xt(_,v,g,!0):(M&8&&u(d,""),P&16&&me(S,d,m,v,g,C,x,y))},tt=(c,a,d,m,v,g,C,x,y)=>{c=c||vt,a=a||vt;const _=c.length,M=a.length,S=Math.min(_,M);let A;for(A=0;A<S;A++){const P=a[A]=y?qe(a[A]):Ne(a[A]);O(c[A],P,d,null,v,g,C,x,y)}_>M?xt(c,v,g,!0,!1,S):me(a,d,m,v,g,C,x,y,S)},Kt=(c,a,d,m,v,g,C,x,y)=>{let _=0;const M=a.length;let S=c.length-1,A=M-1;for(;_<=S&&_<=A;){const P=c[_],H=a[_]=y?qe(a[_]):Ne(a[_]);if(ct(P,H))O(P,H,d,null,v,g,C,x,y);else break;_++}for(;_<=S&&_<=A;){const P=c[S],H=a[A]=y?qe(a[A]):Ne(a[A]);if(ct(P,H))O(P,H,d,null,v,g,C,x,y);else break;S--,A--}if(_>S){if(_<=A){const P=A+1,H=P<M?a[P].el:m;for(;_<=A;)O(null,a[_]=y?qe(a[_]):Ne(a[_]),d,H,v,g,C,x,y),_++}}else if(_>A)for(;_<=S;)Pe(c[_],v,g,!0),_++;else{const P=_,H=_,K=new Map;for(_=H;_<=A;_++){const ye=a[_]=y?qe(a[_]):Ne(a[_]);ye.key!=null&&K.set(ye.key,_)}let U,_e=0;const ce=A-H+1;let Oe=!1,be=0;const Ct=new Array(ce);for(_=0;_<ce;_++)Ct[_]=0;for(_=P;_<=S;_++){const ye=c[_];if(_e>=ce){Pe(ye,v,g,!0);continue}let Fe;if(ye.key!=null)Fe=K.get(ye.key);else for(U=H;U<=A;U++)if(Ct[U-H]===0&&ct(ye,a[U])){Fe=U;break}Fe===void 0?Pe(ye,v,g,!0):(Ct[Fe-H]=_+1,Fe>=be?be=Fe:Oe=!0,O(ye,a[Fe],d,null,v,g,C,x,y),_e++)}const xs=Oe?el(Ct):vt;for(U=xs.length-1,_=ce-1;_>=0;_--){const ye=H+_,Fe=a[ye],ws=ye+1<M?a[ye+1].el:m;Ct[_]===0?O(null,Fe,d,ws,v,g,C,x,y):Oe&&(U<0||_!==xs[U]?nt(Fe,d,ws,2):U--)}}},nt=(c,a,d,m,v=null)=>{const{el:g,type:C,transition:x,children:y,shapeFlag:_}=c;if(_&6){nt(c.component.subTree,a,d,m);return}if(_&128){c.suspense.move(a,d,m);return}if(_&64){C.move(c,a,d,wt);return}if(C===ve){s(g,a,d);for(let S=0;S<y.length;S++)nt(y[S],a,d,m);s(c.anchor,a,d);return}if(C===$n){B(c,a,d);return}if(m!==2&&_&1&&x)if(m===0)x.beforeEnter(g),s(g,a,d),xe(()=>x.enter(g),v);else{const{leave:S,delayLeave:A,afterLeave:P}=x,H=()=>s(g,a,d),K=()=>{S(g,()=>{H(),P&&P()})};A?A(g,H,K):K()}else s(g,a,d)},Pe=(c,a,d,m=!1,v=!1)=>{const{type:g,props:C,ref:x,children:y,dynamicChildren:_,shapeFlag:M,patchFlag:S,dirs:A,cacheIndex:P}=c;if(S===-2&&(v=!1),x!=null&&kn(x,null,d,c,!0),P!=null&&(a.renderCache[P]=void 0),M&256){a.ctx.deactivate(c);return}const H=M&1&&A,K=!bt(c);let U;if(K&&(U=C&&C.onVnodeBeforeUnmount)&&Le(U,a,c),M&6)bi(c.component,d,m);else{if(M&128){c.suspense.unmount(d,m);return}H&&st(c,null,a,"beforeUnmount"),M&64?c.type.remove(c,a,d,wt,m):_&&!_.hasOnce&&(g!==ve||S>0&&S&64)?xt(_,a,d,!1,!0):(g===ve&&S&384||!v&&M&16)&&xt(y,a,d),m&&ms(c)}(K&&(U=C&&C.onVnodeUnmounted)||H)&&xe(()=>{U&&Le(U,a,c),H&&st(c,null,a,"unmounted")},d)},ms=c=>{const{type:a,el:d,anchor:m,transition:v}=c;if(a===ve){_i(d,m);return}if(a===$n){E(c);return}const g=()=>{o(d),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(c.shapeFlag&1&&v&&!v.persisted){const{leave:C,delayLeave:x}=v,y=()=>C(d,g);x?x(c.el,g,y):y()}else g()},_i=(c,a)=>{let d;for(;c!==a;)d=b(c),o(c),c=d;o(a)},bi=(c,a,d)=>{const{bum:m,scope:v,job:g,subTree:C,um:x,m:y,a:_}=c;Ls(y),Ls(_),m&&Tn(m),v.stop(),g&&(g.flags|=8,Pe(C,c,a,d)),x&&xe(x,a),xe(()=>{c.isUnmounted=!0},a),a&&a.pendingBranch&&!a.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===a.pendingId&&(a.deps--,a.deps===0&&a.resolve())},xt=(c,a,d,m=!1,v=!1,g=0)=>{for(let C=g;C<c.length;C++)Pe(c[C],a,d,m,v)},qt=c=>{if(c.shapeFlag&6)return qt(c.component.subTree);if(c.shapeFlag&128)return c.suspense.next();const a=b(c.anchor||c.el),d=a&&a[mr];return d?b(d):a};let Cn=!1;const _s=(c,a,d)=>{c==null?a._vnode&&Pe(a._vnode,null,null,!0):O(a._vnode||null,c,a,null,null,null,d),a._vnode=c,Cn||(Cn=!0,Es(),Po(),Cn=!1)},wt={p:O,um:Pe,m:nt,r:ms,mt:le,mc:me,pc:W,pbc:k,n:qt,o:e};let bs,ys;return{render:_s,hydrate:bs,createApp:Ur(_s,bs)}}function Pn({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function ot({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Qr(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function ii(e,t,n=!1){const s=e.children,o=t.children;if(I(s)&&I(o))for(let i=0;i<s.length;i++){const r=s[i];let l=o[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=o[i]=qe(o[i]),l.el=r.el),!n&&l.patchFlag!==-2&&ii(r,l)),l.type===xn&&(l.el=r.el)}}function el(e){const t=e.slice(),n=[0];let s,o,i,r,l;const f=e.length;for(s=0;s<f;s++){const h=e[s];if(h!==0){if(o=n[n.length-1],e[o]<h){t[s]=o,n.push(s);continue}for(i=0,r=n.length-1;i<r;)l=i+r>>1,e[n[l]]<h?i=l+1:r=l;h<e[n[i]]&&(i>0&&(t[s]=n[i-1]),n[i]=s)}}for(i=n.length,r=n[i-1];i-- >0;)n[i]=r,r=t[r];return n}function ri(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:ri(t)}function Ls(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const tl=Symbol.for("v-scx"),nl=()=>en(tl);function Fn(e,t,n){return li(e,t,n)}function li(e,t,n=G){const{immediate:s,deep:o,flush:i,once:r}=n,l=ee({},n),f=t&&s||!t&&i!=="post";let h;if(Vt){if(i==="sync"){const w=nl();h=w.__watcherHandles||(w.__watcherHandles=[])}else if(!f){const w=()=>{};return w.stop=He,w.resume=He,w.pause=He,w}}const u=ie;l.call=(w,R,O)=>Re(w,u,R,O);let p=!1;i==="post"?l.scheduler=w=>{xe(w,u&&u.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(w,R)=>{R?w():as(w)}),l.augmentJob=w=>{t&&(w.flags|=4),p&&(w.flags|=2,u&&(w.id=u.uid,w.i=u))};const b=hr(e,t,l);return Vt&&(h?h.push(b):f&&b()),b}function sl(e,t,n){const s=this.proxy,o=Q(e)?e.includes(".")?ci(s,e):()=>s[e]:e.bind(s,s);let i;L(t)?i=t:(i=t.handler,n=t);const r=Wt(this),l=li(o,i.bind(s),n);return r(),l}function ci(e,t){const n=t.split(".");return()=>{let s=e;for(let o=0;o<n.length&&s;o++)s=s[n[o]];return s}}const ol=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ae(t)}Modifiers`]||e[`${ht(t)}Modifiers`];function il(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||G;let o=n;const i=t.startsWith("update:"),r=i&&ol(s,t.slice(7));r&&(r.trim&&(o=n.map(u=>Q(u)?u.trim():u)),r.number&&(o=n.map(Ti)));let l,f=s[l=Sn(t)]||s[l=Sn(Ae(t))];!f&&i&&(f=s[l=Sn(ht(t))]),f&&Re(f,e,6,o);const h=s[l+"Once"];if(h){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Re(h,e,6,o)}}function fi(e,t,n=!1){const s=t.emitsCache,o=s.get(e);if(o!==void 0)return o;const i=e.emits;let r={},l=!1;if(!L(e)){const f=h=>{const u=fi(h,t,!0);u&&(l=!0,ee(r,u))};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}return!i&&!l?(Y(e)&&s.set(e,null),null):(I(i)?i.forEach(f=>r[f]=null):ee(r,i),Y(e)&&s.set(e,r),r)}function yn(e,t){return!e||!un(t)?!1:(t=t.slice(2).replace(/Once$/,""),V(e,t[0].toLowerCase()+t.slice(1))||V(e,ht(t))||V(e,t))}function Ln(e){const{type:t,vnode:n,proxy:s,withProxy:o,propsOptions:[i],slots:r,attrs:l,emit:f,render:h,renderCache:u,props:p,data:b,setupState:w,ctx:R,inheritAttrs:O}=e,N=cn(e);let F,j;try{if(n.shapeFlag&4){const E=o||s,z=E;F=Ne(h.call(z,E,u,p,w,b,R)),j=l}else{const E=t;F=Ne(E.length>1?E(p,{attrs:l,slots:r,emit:f}):E(p,null)),j=t.props?l:rl(l)}}catch(E){Ft.length=0,mn(E,e,1),F=oe(ge)}let B=F;if(j&&O!==!1){const E=Object.keys(j),{shapeFlag:z}=B;E.length&&z&7&&(i&&E.some(Zn)&&(j=ll(j,i)),B=Xe(B,j,!1,!0))}return n.dirs&&(B=Xe(B,null,!1,!0),B.dirs=B.dirs?B.dirs.concat(n.dirs):n.dirs),n.transition&&Dt(B,n.transition),F=B,cn(N),F}const rl=e=>{let t;for(const n in e)(n==="class"||n==="style"||un(n))&&((t||(t={}))[n]=e[n]);return t},ll=(e,t)=>{const n={};for(const s in e)(!Zn(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function cl(e,t,n){const{props:s,children:o,component:i}=e,{props:r,children:l,patchFlag:f}=t,h=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&f>=0){if(f&1024)return!0;if(f&16)return s?$s(s,r,h):!!r;if(f&8){const u=t.dynamicProps;for(let p=0;p<u.length;p++){const b=u[p];if(r[b]!==s[b]&&!yn(h,b))return!0}}}else return(o||l)&&(!l||!l.$stable)?!0:s===r?!1:s?r?$s(s,r,h):!0:!!r;return!1}function $s(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let o=0;o<s.length;o++){const i=s[o];if(t[i]!==e[i]&&!yn(n,i))return!0}return!1}function fl({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const ai=e=>e.__isSuspense;function al(e,t){t&&t.pendingBranch?I(e)?t.effects.push(...e):t.effects.push(e):gr(e)}const ve=Symbol.for("v-fgt"),xn=Symbol.for("v-txt"),ge=Symbol.for("v-cmt"),$n=Symbol.for("v-stc"),Ft=[];let Se=null;function Ce(e=!1){Ft.push(Se=e?null:[])}function ul(){Ft.pop(),Se=Ft[Ft.length-1]||null}let jt=1;function Ns(e){jt+=e,e<0&&Se&&(Se.hasOnce=!0)}function ui(e){return e.dynamicChildren=jt>0?Se||vt:null,ul(),jt>0&&Se&&Se.push(e),e}function Ye(e,t,n,s,o,i){return ui(te(e,t,n,s,o,i,!0))}function Bt(e,t,n,s,o){return ui(oe(e,t,n,s,o,!0))}function zt(e){return e?e.__v_isVNode===!0:!1}function ct(e,t){return e.type===t.type&&e.key===t.key}const hi=({key:e})=>e??null,tn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Q(e)||re(e)||L(e)?{i:ue,r:e,k:t,f:!!n}:e:null);function te(e,t=null,n=null,s=0,o=null,i=e===ve?0:1,r=!1,l=!1){const f={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&hi(t),ref:t&&tn(t),scopeId:Lo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:ue};return l?(ds(f,n),i&128&&e.normalize(f)):n&&(f.shapeFlag|=Q(n)?8:16),jt>0&&!r&&Se&&(f.patchFlag>0||i&6)&&f.patchFlag!==32&&Se.push(f),f}const oe=hl;function hl(e,t=null,n=null,s=0,o=null,i=!1){if((!e||e===Fr)&&(e=ge),zt(e)){const l=Xe(e,t,!0);return n&&ds(l,n),jt>0&&!i&&Se&&(l.shapeFlag&6?Se[Se.indexOf(e)]=l:Se.push(l)),l.patchFlag=-2,l}if(Tl(e)&&(e=e.__vccOpts),t){t=pl(t);let{class:l,style:f}=t;l&&!Q(l)&&(t.class=ns(l)),Y(f)&&(fs(f)&&!I(f)&&(f=ee({},f)),t.style=ts(f))}const r=Q(e)?1:ai(e)?128:$o(e)?64:Y(e)?4:L(e)?2:0;return te(e,t,n,s,o,r,i,!0)}function pl(e){return e?fs(e)||Zo(e)?ee({},e):e:null}function Xe(e,t,n=!1,s=!1){const{props:o,ref:i,patchFlag:r,children:l,transition:f}=e,h=t?vl(o||{},t):o,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:h,key:h&&hi(h),ref:t&&t.ref?n&&i?I(i)?i.concat(tn(t)):[i,tn(t)]:tn(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ve?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:f,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Xe(e.ssContent),ssFallback:e.ssFallback&&Xe(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return f&&s&&Dt(u,f.clone(u)),u}function dl(e=" ",t=0){return oe(xn,null,e,t)}function Zt(e="",t=!1){return t?(Ce(),Bt(ge,null,e)):oe(ge,null,e)}function Ne(e){return e==null||typeof e=="boolean"?oe(ge):I(e)?oe(ve,null,e.slice()):zt(e)?qe(e):oe(xn,null,String(e))}function qe(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Xe(e)}function ds(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(I(t))n=16;else if(typeof t=="object")if(s&65){const o=t.default;o&&(o._c&&(o._d=!1),ds(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!Zo(t)?t._ctx=ue:o===3&&ue&&(ue.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else L(t)?(t={default:t,_ctx:ue},n=32):(t=String(t),s&64?(n=16,t=[dl(t)]):n=8);e.children=t,e.shapeFlag|=n}function vl(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const o in s)if(o==="class")t.class!==s.class&&(t.class=ns([t.class,s.class]));else if(o==="style")t.style=ts([t.style,s.style]);else if(un(o)){const i=t[o],r=s[o];r&&i!==r&&!(I(i)&&i.includes(r))&&(t[o]=i?[].concat(i,r):r)}else o!==""&&(t[o]=s[o])}return t}function Le(e,t,n,s=null){Re(e,t,7,[n,s])}const gl=Yo();let ml=0;function _l(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||gl,i={uid:ml++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Fi(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ei(s,o),emitsOptions:fi(s,o),emit:null,emitted:null,propsDefaults:G,inheritAttrs:s.inheritAttrs,ctx:G,data:G,props:G,attrs:G,slots:G,refs:G,setupState:G,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=il.bind(null,i),e.ce&&e.ce(i),i}let ie=null;const bl=()=>ie||ue;let an,Yn;{const e=vn(),t=(n,s)=>{let o;return(o=e[n])||(o=e[n]=[]),o.push(s),i=>{o.length>1?o.forEach(r=>r(i)):o[0](i)}};an=t("__VUE_INSTANCE_SETTERS__",n=>ie=n),Yn=t("__VUE_SSR_SETTERS__",n=>Vt=n)}const Wt=e=>{const t=ie;return an(e),e.scope.on(),()=>{e.scope.off(),an(t)}},Hs=()=>{ie&&ie.scope.off(),an(null)};function pi(e){return e.vnode.shapeFlag&4}let Vt=!1;function yl(e,t=!1,n=!1){t&&Yn(t);const{props:s,children:o}=e.vnode,i=pi(e);Wr(e,s,i,t),Yr(e,o,n);const r=i?xl(e,t):void 0;return t&&Yn(!1),r}function xl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Nr);const{setup:s}=n;if(s){Ze();const o=e.setupContext=s.length>1?Cl(e):null,i=Wt(e),r=kt(s,e,0,[e.props,o]),l=ro(r);if(Qe(),i(),(l||e.sp)&&!bt(e)&&zo(e),l){if(r.then(Hs,Hs),t)return r.then(f=>{Ds(e,f,t)}).catch(f=>{mn(f,e,0)});e.asyncDep=r}else Ds(e,r,t)}else di(e,t)}function Ds(e,t,n){L(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Y(t)&&(e.setupState=Mo(t)),di(e,n)}let js;function di(e,t,n){const s=e.type;if(!e.render){if(!t&&js&&!s.render){const o=s.template||hs(e).template;if(o){const{isCustomElement:i,compilerOptions:r}=e.appContext.config,{delimiters:l,compilerOptions:f}=s,h=ee(ee({isCustomElement:i,delimiters:l},r),f);s.render=js(o,h)}}e.render=s.render||He}{const o=Wt(e);Ze();try{Hr(e)}finally{Qe(),o()}}}const wl={get(e,t){return fe(e,"get",""),e[t]}};function Cl(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,wl),slots:e.slots,emit:e.emit,expose:t}}function vs(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Mo(tr(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Pt)return Pt[n](e)},has(t,n){return n in t||n in Pt}})):e.proxy}function Sl(e,t=!0){return L(e)?e.displayName||e.name:e.name||t&&e.__name}function Tl(e){return L(e)&&"__vccOpts"in e}const Me=(e,t)=>ar(e,t,Vt);function nn(e,t,n){const s=arguments.length;return s===2?Y(t)&&!I(t)?zt(t)?oe(e,null,[t]):oe(e,t):oe(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&zt(n)&&(n=[n]),oe(e,t,n))}const El="3.5.12";/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Jn;const Bs=typeof window<"u"&&window.trustedTypes;if(Bs)try{Jn=Bs.createPolicy("vue",{createHTML:e=>e})}catch{}const vi=Jn?e=>Jn.createHTML(e):e=>e,Al="http://www.w3.org/2000/svg",Ol="http://www.w3.org/1998/Math/MathML",je=typeof document<"u"?document:null,zs=je&&je.createElement("template"),Ml={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const o=t==="svg"?je.createElementNS(Al,e):t==="mathml"?je.createElementNS(Ol,e):n?je.createElement(e,{is:n}):je.createElement(e);return e==="select"&&s&&s.multiple!=null&&o.setAttribute("multiple",s.multiple),o},createText:e=>je.createTextNode(e),createComment:e=>je.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>je.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,o,i){const r=n?n.previousSibling:t.lastChild;if(o&&(o===i||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===i||!(o=o.nextSibling)););else{zs.innerHTML=vi(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const l=zs.content;if(s==="svg"||s==="mathml"){const f=l.firstChild;for(;f.firstChild;)l.appendChild(f.firstChild);l.removeChild(f)}t.insertBefore(l,n)}return[r?r.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Ue="transition",Tt="animation",Ut=Symbol("_vtc"),gi={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Il=ee({},No,gi),Rl=e=>(e.displayName="Transition",e.props=Il,e),Vs=Rl((e,{slots:t})=>nn(yr,Pl(e),t)),it=(e,t=[])=>{I(e)?e.forEach(n=>n(...t)):e&&e(...t)},Us=e=>e?I(e)?e.some(t=>t.length>1):e.length>1:!1;function Pl(e){const t={};for(const T in e)T in gi||(t[T]=e[T]);if(e.css===!1)return t;const{name:n="v",type:s,duration:o,enterFromClass:i=`${n}-enter-from`,enterActiveClass:r=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:f=i,appearActiveClass:h=r,appearToClass:u=l,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:b=`${n}-leave-active`,leaveToClass:w=`${n}-leave-to`}=e,R=Fl(o),O=R&&R[0],N=R&&R[1],{onBeforeEnter:F,onEnter:j,onEnterCancelled:B,onLeave:E,onLeaveCancelled:z,onBeforeAppear:ne=F,onAppear:he=j,onAppearCancelled:me=B}=t,$=(T,J,le)=>{rt(T,J?u:l),rt(T,J?h:r),le&&le()},k=(T,J)=>{T._isLeaving=!1,rt(T,p),rt(T,w),rt(T,b),J&&J()},X=T=>(J,le)=>{const et=T?he:j,se=()=>$(J,T,le);it(et,[J,se]),ks(()=>{rt(J,T?f:i),ke(J,T?u:l),Us(et)||Ws(J,s,O,se)})};return ee(t,{onBeforeEnter(T){it(F,[T]),ke(T,i),ke(T,r)},onBeforeAppear(T){it(ne,[T]),ke(T,f),ke(T,h)},onEnter:X(!1),onAppear:X(!0),onLeave(T,J){T._isLeaving=!0;const le=()=>k(T,J);ke(T,p),ke(T,b),Nl(),ks(()=>{T._isLeaving&&(rt(T,p),ke(T,w),Us(E)||Ws(T,s,N,le))}),it(E,[T,le])},onEnterCancelled(T){$(T,!1),it(B,[T])},onAppearCancelled(T){$(T,!0),it(me,[T])},onLeaveCancelled(T){k(T),it(z,[T])}})}function Fl(e){if(e==null)return null;if(Y(e))return[Nn(e.enter),Nn(e.leave)];{const t=Nn(e);return[t,t]}}function Nn(e){return Ei(e)}function ke(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[Ut]||(e[Ut]=new Set)).add(t)}function rt(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const n=e[Ut];n&&(n.delete(t),n.size||(e[Ut]=void 0))}function ks(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Ll=0;function Ws(e,t,n,s){const o=e._endId=++Ll,i=()=>{o===e._endId&&s()};if(n!=null)return setTimeout(i,n);const{type:r,timeout:l,propCount:f}=$l(e,t);if(!r)return s();const h=r+"end";let u=0;const p=()=>{e.removeEventListener(h,b),i()},b=w=>{w.target===e&&++u>=f&&p()};setTimeout(()=>{u<f&&p()},l+1),e.addEventListener(h,b)}function $l(e,t){const n=window.getComputedStyle(e),s=R=>(n[R]||"").split(", "),o=s(`${Ue}Delay`),i=s(`${Ue}Duration`),r=Ks(o,i),l=s(`${Tt}Delay`),f=s(`${Tt}Duration`),h=Ks(l,f);let u=null,p=0,b=0;t===Ue?r>0&&(u=Ue,p=r,b=i.length):t===Tt?h>0&&(u=Tt,p=h,b=f.length):(p=Math.max(r,h),u=p>0?r>h?Ue:Tt:null,b=u?u===Ue?i.length:f.length:0);const w=u===Ue&&/\b(transform|all)(,|$)/.test(s(`${Ue}Property`).toString());return{type:u,timeout:p,propCount:b,hasTransform:w}}function Ks(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>qs(n)+qs(e[s])))}function qs(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Nl(){return document.body.offsetHeight}function Hl(e,t,n){const s=e[Ut];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Gs=Symbol("_vod"),Dl=Symbol("_vsh"),jl=Symbol(""),Bl=/(^|;)\s*display\s*:/;function zl(e,t,n){const s=e.style,o=Q(n);let i=!1;if(n&&!o){if(t)if(Q(t))for(const r of t.split(";")){const l=r.slice(0,r.indexOf(":")).trim();n[l]==null&&sn(s,l,"")}else for(const r in t)n[r]==null&&sn(s,r,"");for(const r in n)r==="display"&&(i=!0),sn(s,r,n[r])}else if(o){if(t!==n){const r=s[jl];r&&(n+=";"+r),s.cssText=n,i=Bl.test(n)}}else t&&e.removeAttribute("style");Gs in e&&(e[Gs]=i?s.display:"",e[Dl]&&(s.display="none"))}const Ys=/\s*!important$/;function sn(e,t,n){if(I(n))n.forEach(s=>sn(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=Vl(e,t);Ys.test(n)?e.setProperty(ht(s),n.replace(Ys,""),"important"):e[s]=n}}const Js=["Webkit","Moz","ms"],Hn={};function Vl(e,t){const n=Hn[t];if(n)return n;let s=Ae(t);if(s!=="filter"&&s in e)return Hn[t]=s;s=dn(s);for(let o=0;o<Js.length;o++){const i=Js[o]+s;if(i in e)return Hn[t]=i}return t}const Xs="http://www.w3.org/1999/xlink";function Zs(e,t,n,s,o,i=Pi(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Xs,t.slice(6,t.length)):e.setAttributeNS(Xs,t,n):n==null||i&&!ao(n)?e.removeAttribute(t):e.setAttribute(t,i?"":ze(n)?String(n):n)}function Qs(e,t,n,s,o){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?vi(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?e.getAttribute("value")||"":e.value,f=n==null?e.type==="checkbox"?"on":"":String(n);(l!==f||!("_value"in e))&&(e.value=f),n==null&&e.removeAttribute(t),e._value=n;return}let r=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=ao(n):n==null&&l==="string"?(n="",r=!0):l==="number"&&(n=0,r=!0)}try{e[t]=n}catch{}r&&e.removeAttribute(o||t)}function Ul(e,t,n,s){e.addEventListener(t,n,s)}function kl(e,t,n,s){e.removeEventListener(t,n,s)}const eo=Symbol("_vei");function Wl(e,t,n,s,o=null){const i=e[eo]||(e[eo]={}),r=i[t];if(s&&r)r.value=s;else{const[l,f]=Kl(t);if(s){const h=i[t]=Yl(s,o);Ul(e,l,h,f)}else r&&(kl(e,l,r,f),i[t]=void 0)}}const to=/(?:Once|Passive|Capture)$/;function Kl(e){let t;if(to.test(e)){t={};let s;for(;s=e.match(to);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):ht(e.slice(2)),t]}let Dn=0;const ql=Promise.resolve(),Gl=()=>Dn||(ql.then(()=>Dn=0),Dn=Date.now());function Yl(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Re(Jl(s,n.value),t,5,[s])};return n.value=e,n.attached=Gl(),n}function Jl(e,t){if(I(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>o=>!o._stopped&&s&&s(o))}else return t}const no=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Xl=(e,t,n,s,o,i)=>{const r=o==="svg";t==="class"?Hl(e,s,r):t==="style"?zl(e,n,s):un(t)?Zn(t)||Wl(e,t,n,s,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Zl(e,t,s,r))?(Qs(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Zs(e,t,s,r,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Q(s))?Qs(e,Ae(t),s,i,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),Zs(e,t,s,r))};function Zl(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&no(t)&&L(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=e.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return no(t)&&Q(n)?!1:t in e}const Ql=ee({patchProp:Xl},Ml);let so;function ec(){return so||(so=Xr(Ql))}const tc=(...e)=>{const t=ec().createApp(...e),{mount:n}=t;return t.mount=s=>{const o=sc(s);if(!o)return;const i=t._component;!L(i)&&!i.render&&!i.template&&(i.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const r=n(o,!1,nc(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),r},t};function nc(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function sc(e){return Q(e)?document.querySelector(e):e}const wn=(e,t)=>{const n=e.__vccOpts||e;for(const[s,o]of t)n[s]=o;return n},oc={class:"card-content"},ic={class:"title"},rc={class:"icon"},lc={class:"foot"},cc={class:"push"},fc={__name:"Card",props:{title:String,background_color:String,scr:String,url:String,html:String,index:Number,author:String,icon:String,date:String},emits:["display-html"],setup(e,{emit:t}){const n=e,s=t;function o(){s("display-html",n.html)}return(i,r)=>{const l=Pr("v-icon");return Ce(),Ye("div",{class:"card",onClick:o},[te("div",oc,[te("div",ic,Et(e.index)+" "+Et(e.title),1),te("div",rc,[oe(l,{name:e.icon,scale:"4"},null,8,["name"])])]),te("div",lc,[te("div",null,Et(e.date),1),te("div",cc,Et(e.author),1)])])}}},ac=wn(fc,[["__scopeId","data-v-14bb677b"]]),uc={class:"card-container"},hc={__name:"CardGroup",setup(e){return(t,n)=>(Ce(),Ye("div",uc,[Ko(t.$slots,"default",{},void 0)]))}},pc=wn(hc,[["__scopeId","data-v-9af64a47"]]),dc={class:"article"},vc=["innerHTML"],gc={__name:"Article",props:{html:String},setup(e){return(t,n)=>(Ce(),Ye("div",dc,[Ko(t.$slots,"default",{},void 0),te("div",{innerHTML:e.html},null,8,vc)]))}},mc=wn(gc,[["__scopeId","data-v-0c86aa70"]]),oo=`<!doctype html>
<html>
<head>
<meta charset='UTF-8'><meta name='viewport' content='width=device-width initial-scale=1'>
<title>异世界同学</title></head>
<body>
<blockquote><p>这是我的一个朋友写的网文风格的小故事，背景是一个在高考之后昏倒的高中生魂穿到了明日方舟的世界，经过了一段《大明王朝1566》式的人生。</p>
</blockquote>
<h1>异世界同学</h1>
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
</html>`,_c=`<!doctype html>
<html>
<head>
<meta charset='UTF-8'><meta name='viewport' content='width=device-width initial-scale=1'>
<title>子夜的世界，世界的子夜</title></head>
<body>
<blockquote><p>这是我想要创作的一个游戏的设计文档的一部分。这是一段高中生对抗“子夜（Void）”的故事，我还不知道需要搭配什么样的玩法。</p>
</blockquote>
<h1>子夜的世界，世界的子夜</h1>
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
</html>`,bc=`<!doctype html>
<html>
<head>
<meta charset='UTF-8'><meta name='viewport' content='width=device-width initial-scale=1'>
<title>消逝在江北的少女</title></head>
<body>
<blockquote><p>我之前使用RPGMaker创作了一个游戏原型，名叫“消逝在江北的电波”，剧情大概是一个大学生在城市中的各个地铁站寻找神秘异世界信号。</p>
    <p>我后来使用Godot制作了一个视觉小说风格的UI，标题也是“消逝在江北的电波”，标题界面使用的图片就是下面的。</p>
    <p>不过，这个故事我始终不知道怎么写。</p>
</blockquote>
<h1>消逝在江北的少女</h1>
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
</html>`,yc=`<!doctype html>
<html>
<head>
<meta charset='UTF-8'><meta name='viewport' content='width=device-width initial-scale=1'>
<title></title></head>
<body><h1>RTL2832U+R820T2的使用方法</h1>
<p><a href='https://www.cyqsd.cn/7997.html' target='_blank' class='url'>https://www.cyqsd.cn/7997.html</a></p>
<p><a href='https://zhuanlan.zhihu.com/p/128547876' target='_blank' class='url'>https://zhuanlan.zhihu.com/p/128547876</a></p>
<p>按照这两个链接中的教程，安装驱动，然后下载一个压缩包，将其中x64文件夹中的文件复制到sdr#的安装目录下。</p>
<p>第一次替换了一个文件，sdr#打不开了。</p>
<p>第二次，重装了sdr#，不替换上面那个文件，软件成功打开，但是仍然显示No device selected</p>
<p>第三次，将x32文件夹下的文件复制到sdr#的安装目录下，仍然不替换上面的文件，此时Device列表中显示出了选项，但是点击选项后提示“The device is no longer avaliable”</p>
<p>第四次，下载第一个链接下的旧版sdr#（集成dll），成功。</p>
</body>
</html>`,xc={style:{height:"2rem",display:"flex","background-color":"#0063B1"}},wc={key:0,style:{display:"flex","justify-content":"center"}},Cc={key:0},Sc={__name:"App",setup(e){const t=At(!0),n=At(!1),s=At(oo),o=At([{title:"异世界同学",html:oo,author:"by 匿名",icon:"gi-spell-book",date:"24/10/24"},{title:"世界的子夜",html:_c,author:"by WE",icon:"gi-spell-book",date:"24/10/24"},{title:"消逝在江北的少女",html:bc,author:"by WE",icon:"gi-photo-camera",date:"24/10/25"},{title:"RTL2832U+R820T2的使用方法",html:yc,author:"by WE",icon:"gi-notebook",date:"24/11/21"}]);function i(r){n.value=!0,t.value=!1,s.value=r}return(r,l)=>(Ce(),Ye(ve,null,[l[2]||(l[2]=te("header",{class:"container"},[te("div",{class:"content"},[te("div",{style:{display:"flex","flex-direction":"column",color:"white"}},[te("h1",{style:{"margin-bottom":"1rem","font-weight":"bold"}},"欢迎来到沙乡卫星广播站！"),te("p",null,"你好，我是世界无边（WE，World Endless）。"),te("p",null,"我打算在这里放一些现实中放不下的笔记、与一些人的讨论和一些资料。"),te("p",null,"如果大家在互联网上漫游到这里了，就进来坐坐吧。")])])],-1)),te("div",xc,[n.value?(Ce(),Ye("div",{key:0,onClick:l[0]||(l[0]=f=>{n.value=!1,t.value=!0}),style:{margin:"0.25rem 1rem",color:"white"}},"返回")):Zt("",!0)]),te("main",null,[oe(Vs,{name:"slide"},{default:Qt(()=>[t.value?(Ce(),Bt(pc,{key:0},{default:Qt(()=>[(Ce(!0),Ye(ve,null,$r(o.value,(f,h)=>(Ce(),Bt(ac,{key:h,title:f.title,html:f.html,author:f.author,index:h+1,icon:f.icon,date:f.date,onDisplayHtml:i},null,8,["title","html","author","index","icon","date"]))),128))]),_:1})):Zt("",!0)]),_:1}),oe(Vs,{name:"bubble"},{default:Qt(()=>[n.value?(Ce(),Ye("div",wc,[oe(mc,{html:s.value},null,8,["html"])])):Zt("",!0)]),_:1})]),n.value?(Ce(),Ye("footer",Cc,l[1]||(l[1]=[te("p",null,"© 2024 世界无边 All rights reserved.",-1)]))):Zt("",!0)],64))}},Tc=wn(Sc,[["__scopeId","data-v-be15cbf1"]]),Ec={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;","&":"&amp;"};let Ac=0;var Oc=e=>e.replace(/[<>"&]/g,t=>Ec[t]||t),Mc=e=>e+Ac++;const ft={},Ic=e=>{const{name:t,paths:n=[],d:s,polygons:o=[],points:i}=e;s&&n.push({d:s}),i&&o.push({points:i}),ft[t]=Object.assign({},e,{paths:n,polygons:o}),ft[t].minX||(ft[t].minX=0),ft[t].minY||(ft[t].minY=0)},Rc=(...e)=>{for(const t of e)Ic(t)},Pc=xr({name:"OhVueIcon",props:{name:{type:String,validator:e=>!e||e in ft||(console.warn(`Invalid prop: prop "name" is referring to an unregistered icon "${e}".
Please make sure you have imported this icon before using it.`),!1)},title:String,fill:String,scale:{type:[Number,String],default:1},animation:{validator:e=>["spin","spin-pulse","wrench","ring","pulse","flash","float"].includes(e)},hover:Boolean,flip:{validator:e=>["horizontal","vertical","both"].includes(e)},speed:{validator:e=>e==="fast"||e==="slow"},label:String,inverse:Boolean},setup(e){const t=At([]),n=Nt({outerScale:1.2,x:null,y:null}),s=Nt({width:0,height:0}),o=Me(()=>{const O=Number(e.scale);return isNaN(O)||O<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.'),n.outerScale):O*n.outerScale}),i=Me(()=>({"ov-icon":!0,"ov-inverse":e.inverse,"ov-flip-horizontal":e.flip==="horizontal","ov-flip-vertical":e.flip==="vertical","ov-flip-both":e.flip==="both","ov-spin":e.animation==="spin","ov-spin-pulse":e.animation==="spin-pulse","ov-wrench":e.animation==="wrench","ov-ring":e.animation==="ring","ov-pulse":e.animation==="pulse","ov-flash":e.animation==="flash","ov-float":e.animation==="float","ov-hover":e.hover,"ov-fast":e.speed==="fast","ov-slow":e.speed==="slow"})),r=Me(()=>e.name?ft[e.name]:null),l=Me(()=>r.value?`${r.value.minX} ${r.value.minY} ${r.value.width} ${r.value.height}`:`0 0 ${h.value} ${u.value}`),f=Me(()=>{if(!r.value)return 1;const{width:O,height:N}=r.value;return Math.max(O,N)/16}),h=Me(()=>s.width||r.value&&r.value.width/f.value*o.value||0),u=Me(()=>s.height||r.value&&r.value.height/f.value*o.value||0),p=Me(()=>o.value!==1&&{fontSize:o.value+"em"}),b=Me(()=>{if(!r.value||!r.value.raw)return null;const O={};let N=r.value.raw;return N=N.replace(/\s(?:xml:)?id=(["']?)([^"')\s]+)\1/g,(F,j,B)=>{const E=Mc("vat-");return O[B]=E,` id="${E}"`}),N=N.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,(F,j,B,E)=>{const z=j||E;return z&&O[z]?`#${O[z]}`:F}),N}),w=Me(()=>r.value&&r.value.attr?r.value.attr:{}),R=()=>{if(!e.name&&e.name!==null&&t.value.length===0)return void console.warn('Invalid prop: prop "name" is required.');if(r.value)return;let O=0,N=0;t.value.forEach(F=>{F.outerScale=o.value,O=Math.max(O,F.width),N=Math.max(N,F.height)}),s.width=O,s.height=N,t.value.forEach(F=>{F.x=(O-F.width)/2,F.y=(N-F.height)/2})};return us(()=>{R()}),Uo(()=>{R()}),{...rr(n),children:t,icon:r,klass:i,style:p,width:h,height:u,box:l,attribs:w,raw:b}},created(){const e=this.$parent;e&&e.children&&e.children.push(this)},render(){const e=Object.assign({role:this.$attrs.role||(this.label||this.title?"img":null),"aria-label":this.label||null,"aria-hidden":!(this.label||this.title),width:this.width,height:this.height,viewBox:this.box},this.attribs);this.attribs.stroke?e.stroke=this.fill?this.fill:"currentColor":e.fill=this.fill?this.fill:"currentColor",this.x&&(e.x=this.x.toString()),this.y&&(e.y=this.y.toString());let t={class:this.klass,style:this.style};if(t=Object.assign(t,e),this.raw){const o=this.title?`<title>${Oc(this.title)}</title>${this.raw}`:this.raw;t.innerHTML=o}const n=this.title?[nn("title",this.title)]:[],s=(o,i,r)=>nn(o,{...i,key:`${o}-${r}`});return nn("svg",t,this.raw?void 0:n.concat([this.$slots.default?this.$slots.default():this.icon?[...this.icon.paths.map((o,i)=>s("path",o,i)),...this.icon.polygons.map((o,i)=>s("polygon",o,i))]:[]]))}});function gs(e,t){t===void 0&&(t={});var n=t.insertAt;if(e&&typeof document<"u"){var s=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",n==="top"&&s.firstChild?s.insertBefore(o,s.firstChild):s.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}gs(`.ov-icon {
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
`);const Fc={name:"co-file",minX:-51.2,minY:-51.2,width:614.4,height:614.4,raw:'<path fill="var(--ci-primary-color, currentColor)" d="M334.627 16H48v480h424V153.373zM440 166.627V168H320V48h1.373zM80 464V48h208v152h152v264z" class="ci-primary"/>'},Lc={name:"gi-notebook",minX:-35.84,minY:-35.84,width:583.68,height:583.68,raw:'<path d="M131.3 20.35c-14.6.1-28.1 10-31.93 24.82-2.33 9.13-.55 18.4 4.13 25.84-7.67 4.26-13.69 11.53-16.03 20.66-2.32 9.13-.56 18.33 4.1 25.83a32.687 32.687 0 00-15.96 20.6c-2.34 9.1-.54 18.4 4.18 25.8-7.72 4.3-13.75 11.5-16.09 20.7-2.33 9.1-.54 18.4 4.19 25.8-7.72 4.3-13.75 11.5-16.09 20.7-2.34 9.1-.54 18.4 4.18 25.8-7.72 4.3-13.75 11.5-16.08 20.7-2.34 9.1-.54 18.4 4.18 25.8-7.72 4.3-13.75 11.5-16.09 20.7-2.35 9.2-.51 18.5 4.3 26a32.915 32.915 0 00-16.28 20.8c-4.48 17.5 6.25 35.6 23.79 40.1l.1-.2 31.71 8.2-1.47 5.7 261.56 67L374 326.5l-22.4 21.2-87.8 26.5 15.5-42.5-151.7-38.8 4.4-17.4 153.5 39.3 9.7-26.7 15.3-14.4-167-42.8 4.4-17.4 178 45.6 39.6-37.4-206.1-52.8 4.4-17.4L380.7 207l-.1.4 31.5-29.8 18.3-71.4-261.6-67.04-4.8 18.66c2.2-16.32-8.1-32.27-24.5-36.44-2.7-.7-5.5-1.04-8.2-1.03zm.3 17.99c1.2 0 2.4.19 3.5.48 8.1 2.09 12.9 10.13 10.8 18.27l17.2 4.4-11 42.81c2.2-16.35-8.2-32.26-24.5-36.43l-.6-.15c-7.8-2.34-12.2-10.15-10.2-18.07 1.7-6.61 7.3-11 13.7-11.3h1.1zm-11.9 46.51c.9 0 1.9.14 2.9.36l.6.15c8.1 2.08 12.9 10.12 10.8 18.24l17.2 4.4-11 43c2.4-16.4-8-32.6-24.4-36.7-.7-.2-1.3-.4-1.9-.5-7-2.7-10.9-10.1-9-17.62 1.7-6.97 7.9-11.45 14.8-11.29zm59.9 4.59l217 55.66-4.4 17.4-217-55.6zm-72.9 41.86h1.3c.5 0 .9 0 1.4.1.6.2 1.2.3 1.8.5l.1-.2c8.1 2.1 12.9 10.1 10.8 18.3l17.2 4.4-11 43c2.3-16.3-8.1-32.4-24.4-36.6-8.18-2.1-12.94-10.1-10.85-18.3 1.69-6.6 7.25-10.9 13.65-11.2zM465.4 152l-10.2 9.6 31.6 33.5 10.2-9.6zm-23.3 22L315.7 293.5l31.5 33.5 126.5-119.5zm-347.23 3.7c1.48 0 3 .1 4.53.5 8.1 2.1 12.9 10.1 10.8 18.3l17.2 4.4-11 43c2.3-16.4-8.1-32.4-24.44-36.6-8.14-2.1-12.9-10.1-10.82-18.3 1.7-6.6 7.32-11 13.73-11.3zm-11.91 46.5c1.48 0 3 .1 4.53.5 8.14 2.1 12.91 10.1 10.81 18.3l17.2 4.4-11 42.9c2.3-16.3-8.1-32.3-24.45-36.5-8.14-2.1-12.89-10.1-10.81-18.3 1.69-6.6 7.31-11 13.72-11.3zm-11.9 46.5c1.48 0 3 .1 4.53.5 8.13 2.1 12.89 10.1 10.81 18.3l17.2 4.3-10.94 42.8c2.16-16.3-8.25-32.1-24.51-36.3-8.14-2.1-12.9-10.1-10.82-18.3 1.7-6.6 7.32-11 13.73-11.3zm235.34 39.2L293 346.6l37.4-11.3zm-247.25 7.3c1.48 0 3 .1 4.53.5 8.14 2.1 12.9 10.1 10.81 18.3l17.21 4.3-11 43c2.1-16.2-8.3-32-24.53-36.2l.1-.3c-8.16-2.1-12.92-10.1-10.84-18.3 1.69-6.6 7.31-11 13.72-11.3zm56.95 20.3L333.2 393l-4.4 17.4-217.1-55.5zM47.18 364c1.48 0 3 .1 4.52.5 8.14 2.1 12.9 10.1 10.82 18.3l17.2 4.3-3.69 14.4-31.92-8.2v.2c-8.01-2.2-12.67-10.1-10.61-18.2 1.7-6.6 7.32-11 13.73-11.3z"/>'},$c={name:"gi-photo-camera",minX:-35.84,minY:-35.84,width:583.68,height:583.68,raw:'<path d="M41 122.496v14h62v-14zm154.73 0l-32 32H137v46h30.682C192.4 159.898 237.08 132.738 288 132.738s95.6 27.16 120.318 67.758H487v-46h-74.73l-32-32c-92.27-9-92.27-9-184.54 0zM288 150.738c-67.903 0-122.758 54.855-122.758 122.758 0 67.903 54.855 122.758 122.758 122.758 67.903 0 122.758-54.855 122.758-122.758 0-67.903-54.855-122.758-122.758-122.758zm-263 3.758v46h94v-46zm263 14.713c57.49 0 104.287 46.796 104.287 104.286S345.49 377.783 288 377.783c-57.49 0-104.287-46.797-104.287-104.287 0-57.49 46.797-104.287 104.287-104.287zm-21.787 22.042c-12.173.42-25.717 6.526-36.78 16.578-20.025 18.19-26.342 43.853-14.11 57.318 12.232 13.465 38.38 9.634 58.406-8.558 20.023-18.192 26.34-43.855 14.108-57.32-5-5.504-12.62-8.33-21.625-8.018zM25 218.496v142h94v-142zm112 0v142h40.412c-18.888-23.96-30.17-54.183-30.17-87 0-19.507 3.988-38.096 11.188-55zm280.57 0c7.2 16.904 11.188 35.493 11.188 55 0 32.817-11.282 63.04-30.17 87H487v-142zM25 378.496v14h94v-14zm112 0v14h75.89a141.492 141.492 0 01-18.536-14zm244.646 0a141.616 141.616 0 01-18.535 14H487v-14z"/>'},Nc={name:"gi-spell-book",minX:-35.84,minY:-35.84,width:583.68,height:583.68,raw:'<path d="M319.61 20.654c13.145 33.114 13.144 33.115-5.46 63.5 33.114-13.145 33.116-13.146 63.5 5.457-13.145-33.114-13.146-33.113 5.457-63.498-33.114 13.146-33.113 13.145-63.498-5.459zM113.024 38.021c-11.808 21.04-11.808 21.04-35.724 24.217 21.04 11.809 21.04 11.808 24.217 35.725 11.808-21.04 11.808-21.04 35.724-24.217-21.04-11.808-21.04-11.808-24.217-35.725zm76.55 56.184c-.952 50.588-.95 50.588-41.991 80.18 50.587.95 50.588.95 80.18 41.99.95-50.588.95-50.588 41.99-80.18-50.588-.95-50.588-.95-80.18-41.99zm191.177 55.885c-.046 24.127-.048 24.125-19.377 38.564 24.127.047 24.127.046 38.566 19.375.047-24.126.046-24.125 19.375-38.564-24.126-.047-24.125-.046-38.564-19.375zm-184.086 83.88a96.38 96.38 0 00-3.492.134c-18.591 1.064-41.868 8.416-77.445 22.556L76.012 433.582c78.487-20.734 132.97-21.909 170.99-4.615V247.71c-18.076-8.813-31.79-13.399-46.707-13.737a91.166 91.166 0 00-3.629-.002zm122.686 11.42a209.3 209.3 0 00-8.514.098c-12.81.417-27.638 2.215-45.84 4.522v177.135c43.565-7.825 106.85-4.2 171.244 7.566l-39.78-177.197c-35.904-8.37-56.589-11.91-77.11-12.123zm2.289 16.95c18.889.204 36.852 2.768 53.707 5.02l4.437 16.523c-23.78-3.75-65.966-4.906-92.467-.98l-.636-17.805c11.959-2.154 23.625-2.88 34.959-2.758zm-250.483 4.658L60.54 313.002h24.094l10.326-46.004H71.158zm345.881 0l39.742 177.031 2.239 9.973 22.591-.152-40.855-186.852h-23.717zm-78.857 57.82c16.993.026 33.67.791 49.146 2.223l3.524 17.174c-32.645-3.08-72.58-2.889-102.995 0l-.709-17.174c16.733-1.533 34.04-2.248 51.034-2.223zm-281.793 6.18l-6.924 30.004h24.394l6.735-30.004H56.389zm274.418 27.244c4.656.021 9.487.085 14.716.203l2.555 17.498c-19.97-.471-47.115.56-59.728 1.05l-.7-17.985c16.803-.493 29.189-.828 43.157-.766zm41.476.447c8.268.042 16.697.334 24.121.069l2.58 17.74c-8.653-.312-24.87-.83-32.064-.502l-2.807-17.234a257.25 257.25 0 018.17-.073zm-326.97 20.309l-17.985 77.928 25.035-.17 17.455-77.758H45.313zm303.164 11.848c19.608-.01 38.66.774 56.449 2.572l2.996 20.787c-34.305-4.244-85.755-7.697-119.1-3.244l-.14-17.922c20.02-1.379 40.186-2.183 59.795-2.193zm-166.606 44.05c-30.112.09-67.916 6.25-115.408 19.76l-7.22 2.053 187.759-1.27v-6.347c-16.236-9.206-37.42-14.278-65.13-14.196zm134.41 6.174c-19.63.067-37.112 1.439-51.283 4.182v10.064l177.594-1.203c-44.322-8.634-89.137-13.17-126.31-13.043zM26 475v18h460v-18H26z"/>'};Rc(Fc,$c,Nc,Lc);const mi=tc(Tc);mi.component("v-icon",Pc);mi.mount("#app");
