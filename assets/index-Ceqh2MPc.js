(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Zn(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const G={},gt=[],He=()=>{},wi=()=>!1,pn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Qn=e=>e.startsWith("onUpdate:"),ee=Object.assign,es=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},xi=Object.prototype.hasOwnProperty,B=(e,t)=>xi.call(e,t),I=Array.isArray,mt=e=>hn(e)==="[object Map]",io=e=>hn(e)==="[object Set]",L=e=>typeof e=="function",Q=e=>typeof e=="string",Be=e=>typeof e=="symbol",Y=e=>e!==null&&typeof e=="object",ro=e=>(Y(e)||L(e))&&L(e.then)&&L(e.catch),lo=Object.prototype.toString,hn=e=>lo.call(e),Ci=e=>hn(e).slice(8,-1),co=e=>hn(e)==="[object Object]",ts=e=>Q(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,It=Zn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),dn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Si=/-(\w)/g,Ae=dn(e=>e.replace(Si,(t,n)=>n?n.toUpperCase():"")),Ti=/\B([A-Z])/g,pt=dn(e=>e.replace(Ti,"-$1").toLowerCase()),vn=dn(e=>e.charAt(0).toUpperCase()+e.slice(1)),Tn=dn(e=>e?`on${vn(e)}`:""),Je=(e,t)=>!Object.is(e,t),En=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},fo=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},Ei=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Ai=e=>{const t=Q(e)?Number(e):NaN;return isNaN(t)?e:t};let Ss;const gn=()=>Ss||(Ss=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ns(e){if(I(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],o=Q(s)?Ri(s):ns(s);if(o)for(const i in o)t[i]=o[i]}return t}else if(Q(e)||Y(e))return e}const Oi=/;(?![^(]*\))/g,Mi=/:([^]+)/,Ii=/\/\*[^]*?\*\//g;function Ri(e){const t={};return e.replace(Ii,"").split(Oi).forEach(n=>{if(n){const s=n.split(Mi);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function ss(e){let t="";if(Q(e))t=e;else if(I(e))for(let n=0;n<e.length;n++){const s=ss(e[n]);s&&(t+=s+" ")}else if(Y(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Fi="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Pi=Zn(Fi);function ao(e){return!!e||e===""}const uo=e=>!!(e&&e.__v_isRef===!0),Ot=e=>Q(e)?e:e==null?"":I(e)||Y(e)&&(e.toString===lo||!L(e.toString))?uo(e)?Ot(e.value):JSON.stringify(e,po,2):String(e),po=(e,t)=>uo(t)?po(e,t.value):mt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,o],i)=>(n[An(s,i)+" =>"]=o,n),{})}:io(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>An(n))}:Be(t)?An(t):Y(t)&&!I(t)&&!co(t)?String(t):t,An=(e,t="")=>{var n;return Be(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ce;class Li{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ce,!t&&Ce&&(this.index=(Ce.scopes||(Ce.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Ce;try{return Ce=this,t()}finally{Ce=n}}}on(){Ce=this}off(){Ce=this.parent}stop(t){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this._active=!1}}}function Ni(){return Ce}let q;const On=new WeakSet;class ho{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ce&&Ce.active&&Ce.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,On.has(this)&&(On.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||go(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ts(this),mo(this);const t=q,n=Ie;q=this,Ie=!0;try{return this.fn()}finally{bo(this),q=t,Ie=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)rs(t);this.deps=this.depsTail=void 0,Ts(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?On.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Vn(this)&&this.run()}get dirty(){return Vn(this)}}let vo=0,Rt,Ft;function go(e,t=!1){if(e.flags|=8,t){e.next=Ft,Ft=e;return}e.next=Rt,Rt=e}function os(){vo++}function is(){if(--vo>0)return;if(Ft){let t=Ft;for(Ft=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Rt;){let t=Rt;for(Rt=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function mo(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function bo(e){let t,n=e.depsTail,s=n;for(;s;){const o=s.prevDep;s.version===-1?(s===n&&(n=o),rs(s),$i(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=o}e.deps=t,e.depsTail=n}function Vn(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(_o(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function _o(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Nt))return;e.globalVersion=Nt;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!Vn(e)){e.flags&=-3;return}const n=q,s=Ie;q=e,Ie=!0;try{mo(e);const o=e.fn(e._value);(t.version===0||Je(o,e._value))&&(e._value=o,t.version++)}catch(o){throw t.version++,o}finally{q=n,Ie=s,bo(e),e.flags&=-3}}function rs(e,t=!1){const{dep:n,prevSub:s,nextSub:o}=e;if(s&&(s.nextSub=o,e.prevSub=void 0),o&&(o.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)rs(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function $i(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Ie=!0;const yo=[];function Ze(){yo.push(Ie),Ie=!1}function Qe(){const e=yo.pop();Ie=e===void 0?!0:e}function Ts(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=q;q=void 0;try{t()}finally{q=n}}}let Nt=0;class Hi{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ls{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!q||!Ie||q===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==q)n=this.activeLink=new Hi(q,this),q.deps?(n.prevDep=q.depsTail,q.depsTail.nextDep=n,q.depsTail=n):q.deps=q.depsTail=n,wo(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=q.depsTail,n.nextDep=void 0,q.depsTail.nextDep=n,q.depsTail=n,q.deps===n&&(q.deps=s)}return n}trigger(t){this.version++,Nt++,this.notify(t)}notify(t){os();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{is()}}}function wo(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)wo(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const on=new WeakMap,at=Symbol(""),zn=Symbol(""),$t=Symbol("");function fe(e,t,n){if(Ie&&q){let s=on.get(e);s||on.set(e,s=new Map);let o=s.get(n);o||(s.set(n,o=new ls),o.map=s,o.key=n),o.track()}}function ze(e,t,n,s,o,i){const r=on.get(e);if(!r){Nt++;return}const l=f=>{f&&f.trigger()};if(os(),t==="clear")r.forEach(l);else{const f=I(e),p=f&&ts(n);if(f&&n==="length"){const u=Number(s);r.forEach((h,_)=>{(_==="length"||_===$t||!Be(_)&&_>=u)&&l(h)})}else switch((n!==void 0||r.has(void 0))&&l(r.get(n)),p&&l(r.get($t)),t){case"add":f?p&&l(r.get("length")):(l(r.get(at)),mt(e)&&l(r.get(zn)));break;case"delete":f||(l(r.get(at)),mt(e)&&l(r.get(zn)));break;case"set":mt(e)&&l(r.get(at));break}}is()}function Di(e,t){const n=on.get(e);return n&&n.get(t)}function ht(e){const t=D(e);return t===e?t:(fe(t,"iterate",$t),Ee(e)?t:t.map(ae))}function mn(e){return fe(e=D(e),"iterate",$t),e}const ji={__proto__:null,[Symbol.iterator](){return Mn(this,Symbol.iterator,ae)},concat(...e){return ht(this).concat(...e.map(t=>I(t)?ht(t):t))},entries(){return Mn(this,"entries",e=>(e[1]=ae(e[1]),e))},every(e,t){return De(this,"every",e,t,void 0,arguments)},filter(e,t){return De(this,"filter",e,t,n=>n.map(ae),arguments)},find(e,t){return De(this,"find",e,t,ae,arguments)},findIndex(e,t){return De(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return De(this,"findLast",e,t,ae,arguments)},findLastIndex(e,t){return De(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return De(this,"forEach",e,t,void 0,arguments)},includes(...e){return In(this,"includes",e)},indexOf(...e){return In(this,"indexOf",e)},join(e){return ht(this).join(e)},lastIndexOf(...e){return In(this,"lastIndexOf",e)},map(e,t){return De(this,"map",e,t,void 0,arguments)},pop(){return Tt(this,"pop")},push(...e){return Tt(this,"push",e)},reduce(e,...t){return Es(this,"reduce",e,t)},reduceRight(e,...t){return Es(this,"reduceRight",e,t)},shift(){return Tt(this,"shift")},some(e,t){return De(this,"some",e,t,void 0,arguments)},splice(...e){return Tt(this,"splice",e)},toReversed(){return ht(this).toReversed()},toSorted(e){return ht(this).toSorted(e)},toSpliced(...e){return ht(this).toSpliced(...e)},unshift(...e){return Tt(this,"unshift",e)},values(){return Mn(this,"values",ae)}};function Mn(e,t,n){const s=mn(e),o=s[t]();return s!==e&&!Ee(e)&&(o._next=o.next,o.next=()=>{const i=o._next();return i.value&&(i.value=n(i.value)),i}),o}const Vi=Array.prototype;function De(e,t,n,s,o,i){const r=mn(e),l=r!==e&&!Ee(e),f=r[t];if(f!==Vi[t]){const h=f.apply(e,i);return l?ae(h):h}let p=n;r!==e&&(l?p=function(h,_){return n.call(this,ae(h),_,e)}:n.length>2&&(p=function(h,_){return n.call(this,h,_,e)}));const u=f.call(r,p,s);return l&&o?o(u):u}function Es(e,t,n,s){const o=mn(e);let i=n;return o!==e&&(Ee(e)?n.length>3&&(i=function(r,l,f){return n.call(this,r,l,f,e)}):i=function(r,l,f){return n.call(this,r,ae(l),f,e)}),o[t](i,...s)}function In(e,t,n){const s=D(e);fe(s,"iterate",$t);const o=s[t](...n);return(o===-1||o===!1)&&as(n[0])?(n[0]=D(n[0]),s[t](...n)):o}function Tt(e,t,n=[]){Ze(),os();const s=D(e)[t].apply(e,n);return is(),Qe(),s}const zi=Zn("__proto__,__v_isRef,__isVue"),xo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Be));function Bi(e){Be(e)||(e=String(e));const t=D(this);return fe(t,"has",e),t.hasOwnProperty(e)}class Co{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){const o=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!o;if(n==="__v_isReadonly")return o;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(o?i?Zi:Ao:i?Eo:To).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const r=I(t);if(!o){let f;if(r&&(f=ji[n]))return f;if(n==="hasOwnProperty")return Bi}const l=Reflect.get(t,n,re(t)?t:s);return(Be(n)?xo.has(n):zi(n))||(o||fe(t,"get",n),i)?l:re(l)?r&&ts(n)?l:l.value:Y(l)?o?Oo(l):Ht(l):l}}class So extends Co{constructor(t=!1){super(!1,t)}set(t,n,s,o){let i=t[n];if(!this._isShallow){const f=ut(i);if(!Ee(s)&&!ut(s)&&(i=D(i),s=D(s)),!I(t)&&re(i)&&!re(s))return f?!1:(i.value=s,!0)}const r=I(t)&&ts(n)?Number(n)<t.length:B(t,n),l=Reflect.set(t,n,s,re(t)?t:o);return t===D(o)&&(r?Je(s,i)&&ze(t,"set",n,s):ze(t,"add",n,s)),l}deleteProperty(t,n){const s=B(t,n);t[n];const o=Reflect.deleteProperty(t,n);return o&&s&&ze(t,"delete",n,void 0),o}has(t,n){const s=Reflect.has(t,n);return(!Be(n)||!xo.has(n))&&fe(t,"has",n),s}ownKeys(t){return fe(t,"iterate",I(t)?"length":at),Reflect.ownKeys(t)}}class ki extends Co{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Ui=new So,Wi=new ki,Ki=new So(!0);const Bn=e=>e,Yt=e=>Reflect.getPrototypeOf(e);function qi(e,t,n){return function(...s){const o=this.__v_raw,i=D(o),r=mt(i),l=e==="entries"||e===Symbol.iterator&&r,f=e==="keys"&&r,p=o[e](...s),u=n?Bn:t?kn:ae;return!t&&fe(i,"iterate",f?zn:at),{next(){const{value:h,done:_}=p.next();return _?{value:h,done:_}:{value:l?[u(h[0]),u(h[1])]:u(h),done:_}},[Symbol.iterator](){return this}}}}function Jt(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Gi(e,t){const n={get(o){const i=this.__v_raw,r=D(i),l=D(o);e||(Je(o,l)&&fe(r,"get",o),fe(r,"get",l));const{has:f}=Yt(r),p=t?Bn:e?kn:ae;if(f.call(r,o))return p(i.get(o));if(f.call(r,l))return p(i.get(l));i!==r&&i.get(o)},get size(){const o=this.__v_raw;return!e&&fe(D(o),"iterate",at),Reflect.get(o,"size",o)},has(o){const i=this.__v_raw,r=D(i),l=D(o);return e||(Je(o,l)&&fe(r,"has",o),fe(r,"has",l)),o===l?i.has(o):i.has(o)||i.has(l)},forEach(o,i){const r=this,l=r.__v_raw,f=D(l),p=t?Bn:e?kn:ae;return!e&&fe(f,"iterate",at),l.forEach((u,h)=>o.call(i,p(u),p(h),r))}};return ee(n,e?{add:Jt("add"),set:Jt("set"),delete:Jt("delete"),clear:Jt("clear")}:{add(o){!t&&!Ee(o)&&!ut(o)&&(o=D(o));const i=D(this);return Yt(i).has.call(i,o)||(i.add(o),ze(i,"add",o,o)),this},set(o,i){!t&&!Ee(i)&&!ut(i)&&(i=D(i));const r=D(this),{has:l,get:f}=Yt(r);let p=l.call(r,o);p||(o=D(o),p=l.call(r,o));const u=f.call(r,o);return r.set(o,i),p?Je(i,u)&&ze(r,"set",o,i):ze(r,"add",o,i),this},delete(o){const i=D(this),{has:r,get:l}=Yt(i);let f=r.call(i,o);f||(o=D(o),f=r.call(i,o)),l&&l.call(i,o);const p=i.delete(o);return f&&ze(i,"delete",o,void 0),p},clear(){const o=D(this),i=o.size!==0,r=o.clear();return i&&ze(o,"clear",void 0,void 0),r}}),["keys","values","entries",Symbol.iterator].forEach(o=>{n[o]=qi(o,e,t)}),n}function cs(e,t){const n=Gi(e,t);return(s,o,i)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?s:Reflect.get(B(n,o)&&o in s?n:s,o,i)}const Yi={get:cs(!1,!1)},Ji={get:cs(!1,!0)},Xi={get:cs(!0,!1)};const To=new WeakMap,Eo=new WeakMap,Ao=new WeakMap,Zi=new WeakMap;function Qi(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function er(e){return e.__v_skip||!Object.isExtensible(e)?0:Qi(Ci(e))}function Ht(e){return ut(e)?e:fs(e,!1,Ui,Yi,To)}function tr(e){return fs(e,!1,Ki,Ji,Eo)}function Oo(e){return fs(e,!0,Wi,Xi,Ao)}function fs(e,t,n,s,o){if(!Y(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=o.get(e);if(i)return i;const r=er(e);if(r===0)return e;const l=new Proxy(e,r===2?s:n);return o.set(e,l),l}function bt(e){return ut(e)?bt(e.__v_raw):!!(e&&e.__v_isReactive)}function ut(e){return!!(e&&e.__v_isReadonly)}function Ee(e){return!!(e&&e.__v_isShallow)}function as(e){return e?!!e.__v_raw:!1}function D(e){const t=e&&e.__v_raw;return t?D(t):e}function nr(e){return!B(e,"__v_skip")&&Object.isExtensible(e)&&fo(e,"__v_skip",!0),e}const ae=e=>Y(e)?Ht(e):e,kn=e=>Y(e)?Oo(e):e;function re(e){return e?e.__v_isRef===!0:!1}function dt(e){return sr(e,!1)}function sr(e,t){return re(e)?e:new or(e,t)}class or{constructor(t,n){this.dep=new ls,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:D(t),this._value=n?t:ae(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||Ee(t)||ut(t);t=s?t:D(t),Je(t,n)&&(this._rawValue=t,this._value=s?t:ae(t),this.dep.trigger())}}function Mo(e){return re(e)?e.value:e}const ir={get:(e,t,n)=>t==="__v_raw"?e:Mo(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const o=e[t];return re(o)&&!re(n)?(o.value=n,!0):Reflect.set(e,t,n,s)}};function Io(e){return bt(e)?e:new Proxy(e,ir)}function rr(e){const t=I(e)?new Array(e.length):{};for(const n in e)t[n]=cr(e,n);return t}class lr{constructor(t,n,s){this._object=t,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const t=this._object[this._key];return this._value=t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Di(D(this._object),this._key)}}function cr(e,t,n){const s=e[t];return re(s)?s:new lr(e,t,n)}class fr{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new ls(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Nt-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&q!==this)return go(this,!0),!0}get value(){const t=this.dep.track();return _o(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function ar(e,t,n=!1){let s,o;return L(e)?s=e:(s=e.get,o=e.set),new fr(s,o,n)}const Xt={},rn=new WeakMap;let lt;function ur(e,t=!1,n=lt){if(n){let s=rn.get(n);s||rn.set(n,s=[]),s.push(e)}}function pr(e,t,n=G){const{immediate:s,deep:o,once:i,scheduler:r,augmentJob:l,call:f}=n,p=E=>o?E:Ee(E)||o===!1||o===0?Ye(E,1):Ye(E);let u,h,_,x,R=!1,O=!1;if(re(e)?(h=()=>e.value,R=Ee(e)):bt(e)?(h=()=>p(e),R=!0):I(e)?(O=!0,R=e.some(E=>bt(E)||Ee(E)),h=()=>e.map(E=>{if(re(E))return E.value;if(bt(E))return p(E);if(L(E))return f?f(E,2):E()})):L(e)?t?h=f?()=>f(e,2):e:h=()=>{if(_){Ze();try{_()}finally{Qe()}}const E=lt;lt=u;try{return f?f(e,3,[x]):e(x)}finally{lt=E}}:h=He,t&&o){const E=h,z=o===!0?1/0:o;h=()=>Ye(E(),z)}const $=Ni(),P=()=>{u.stop(),$&&es($.effects,u)};if(i&&t){const E=t;t=(...z)=>{E(...z),P()}}let j=O?new Array(e.length).fill(Xt):Xt;const V=E=>{if(!(!(u.flags&1)||!u.dirty&&!E))if(t){const z=u.run();if(o||R||(O?z.some((ne,pe)=>Je(ne,j[pe])):Je(z,j))){_&&_();const ne=lt;lt=u;try{const pe=[z,j===Xt?void 0:O&&j[0]===Xt?[]:j,x];f?f(t,3,pe):t(...pe),j=z}finally{lt=ne}}}else u.run()};return l&&l(V),u=new ho(h),u.scheduler=r?()=>r(V,!1):V,x=E=>ur(E,!1,u),_=u.onStop=()=>{const E=rn.get(u);if(E){if(f)f(E,4);else for(const z of E)z();rn.delete(u)}},t?s?V(!0):j=u.run():r?r(V.bind(null,!0),!0):u.run(),P.pause=u.pause.bind(u),P.resume=u.resume.bind(u),P.stop=P,P}function Ye(e,t=1/0,n){if(t<=0||!Y(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,re(e))Ye(e.value,t,n);else if(I(e))for(let s=0;s<e.length;s++)Ye(e[s],t,n);else if(io(e)||mt(e))e.forEach(s=>{Ye(s,t,n)});else if(co(e)){for(const s in e)Ye(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&Ye(e[s],t,n)}return e}/**
* @vue/runtime-core v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Wt(e,t,n,s){try{return s?e(...s):e()}catch(o){bn(o,t,n)}}function Re(e,t,n,s){if(L(e)){const o=Wt(e,t,n,s);return o&&ro(o)&&o.catch(i=>{bn(i,t,n)}),o}if(I(e)){const o=[];for(let i=0;i<e.length;i++)o.push(Re(e[i],t,n,s));return o}}function bn(e,t,n,s=!0){const o=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:r}=t&&t.appContext.config||G;if(t){let l=t.parent;const f=t.proxy,p=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const u=l.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](e,f,p)===!1)return}l=l.parent}if(i){Ze(),Wt(i,null,10,[e,f,p]),Qe();return}}hr(e,n,o,s,r)}function hr(e,t,n,s=!0,o=!1){if(o)throw e;console.error(e)}const de=[];let Ne=-1;const _t=[];let Ke=null,vt=0;const Ro=Promise.resolve();let ln=null;function dr(e){const t=ln||Ro;return e?t.then(this?e.bind(this):e):t}function vr(e){let t=Ne+1,n=de.length;for(;t<n;){const s=t+n>>>1,o=de[s],i=Dt(o);i<e||i===e&&o.flags&2?t=s+1:n=s}return t}function us(e){if(!(e.flags&1)){const t=Dt(e),n=de[de.length-1];!n||!(e.flags&2)&&t>=Dt(n)?de.push(e):de.splice(vr(t),0,e),e.flags|=1,Fo()}}function Fo(){ln||(ln=Ro.then(Lo))}function gr(e){I(e)?_t.push(...e):Ke&&e.id===-1?Ke.splice(vt+1,0,e):e.flags&1||(_t.push(e),e.flags|=1),Fo()}function As(e,t,n=Ne+1){for(;n<de.length;n++){const s=de[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;de.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Po(e){if(_t.length){const t=[...new Set(_t)].sort((n,s)=>Dt(n)-Dt(s));if(_t.length=0,Ke){Ke.push(...t);return}for(Ke=t,vt=0;vt<Ke.length;vt++){const n=Ke[vt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ke=null,vt=0}}const Dt=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Lo(e){try{for(Ne=0;Ne<de.length;Ne++){const t=de[Ne];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Wt(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Ne<de.length;Ne++){const t=de[Ne];t&&(t.flags&=-2)}Ne=-1,de.length=0,Po(),ln=null,(de.length||_t.length)&&Lo()}}let ue=null,No=null;function cn(e){const t=ue;return ue=e,No=e&&e.type.__scopeId||null,t}function Qt(e,t=ue,n){if(!t||e._n)return e;const s=(...o)=>{s._d&&Hs(-1);const i=cn(t);let r;try{r=e(...o)}finally{cn(i),s._d&&Hs(1)}return r};return s._n=!0,s._c=!0,s._d=!0,s}function st(e,t,n,s){const o=e.dirs,i=t&&t.dirs;for(let r=0;r<o.length;r++){const l=o[r];i&&(l.oldValue=i[r].value);let f=l.dir[s];f&&(Ze(),Re(f,n,8,[e.el,l,e,t]),Qe())}}const mr=Symbol("_vte"),$o=e=>e.__isTeleport,qe=Symbol("_leaveCb"),Zt=Symbol("_enterCb");function br(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ps(()=>{e.isMounted=!0}),Wo(()=>{e.isUnmounting=!0}),e}const Te=[Function,Array],Ho={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Te,onEnter:Te,onAfterEnter:Te,onEnterCancelled:Te,onBeforeLeave:Te,onLeave:Te,onAfterLeave:Te,onLeaveCancelled:Te,onBeforeAppear:Te,onAppear:Te,onAfterAppear:Te,onAppearCancelled:Te},Do=e=>{const t=e.subTree;return t.component?Do(t.component):t},_r={name:"BaseTransition",props:Ho,setup(e,{slots:t}){const n=_l(),s=br();return()=>{const o=t.default&&zo(t.default(),!0);if(!o||!o.length)return;const i=jo(o),r=D(e),{mode:l}=r;if(s.isLeaving)return Rn(i);const f=Os(i);if(!f)return Rn(i);let p=Un(f,r,s,n,_=>p=_);f.type!==ge&&jt(f,p);const u=n.subTree,h=u&&Os(u);if(h&&h.type!==ge&&!ct(f,h)&&Do(n).type!==ge){const _=Un(h,r,s,n);if(jt(h,_),l==="out-in"&&f.type!==ge)return s.isLeaving=!0,_.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete _.afterLeave},Rn(i);l==="in-out"&&f.type!==ge&&(_.delayLeave=(x,R,O)=>{const $=Vo(s,h);$[String(h.key)]=h,x[qe]=()=>{R(),x[qe]=void 0,delete p.delayedLeave},p.delayedLeave=O})}return i}}};function jo(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==ge){t=n;break}}return t}const yr=_r;function Vo(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function Un(e,t,n,s,o){const{appear:i,mode:r,persisted:l=!1,onBeforeEnter:f,onEnter:p,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:_,onLeave:x,onAfterLeave:R,onLeaveCancelled:O,onBeforeAppear:$,onAppear:P,onAfterAppear:j,onAppearCancelled:V}=t,E=String(e.key),z=Vo(n,e),ne=(N,U)=>{N&&Re(N,s,9,U)},pe=(N,U)=>{const X=U[1];ne(N,U),I(N)?N.every(T=>T.length<=1)&&X():N.length<=1&&X()},me={mode:r,persisted:l,beforeEnter(N){let U=f;if(!n.isMounted)if(i)U=$||f;else return;N[qe]&&N[qe](!0);const X=z[E];X&&ct(e,X)&&X.el[qe]&&X.el[qe](),ne(U,[N])},enter(N){let U=p,X=u,T=h;if(!n.isMounted)if(i)U=P||p,X=j||u,T=V||h;else return;let J=!1;const le=N[Zt]=et=>{J||(J=!0,et?ne(T,[N]):ne(X,[N]),me.delayedLeave&&me.delayedLeave(),N[Zt]=void 0)};U?pe(U,[N,le]):le()},leave(N,U){const X=String(e.key);if(N[Zt]&&N[Zt](!0),n.isUnmounting)return U();ne(_,[N]);let T=!1;const J=N[qe]=le=>{T||(T=!0,U(),le?ne(O,[N]):ne(R,[N]),N[qe]=void 0,z[X]===e&&delete z[X])};z[X]=e,x?pe(x,[N,J]):J()},clone(N){const U=Un(N,t,n,s,o);return o&&o(U),U}};return me}function Rn(e){if(_n(e))return e=Xe(e),e.children=null,e}function Os(e){if(!_n(e))return $o(e.type)&&e.children?jo(e.children):e;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&L(n.default))return n.default()}}function jt(e,t){e.shapeFlag&6&&e.component?(e.transition=t,jt(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function zo(e,t=!1,n){let s=[],o=0;for(let i=0;i<e.length;i++){let r=e[i];const l=n==null?r.key:String(n)+String(r.key!=null?r.key:i);r.type===ve?(r.patchFlag&128&&o++,s=s.concat(zo(r.children,t,l))):(t||r.type!==ge)&&s.push(l!=null?Xe(r,{key:l}):r)}if(o>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function wr(e,t){return L(e)?ee({name:e.name},t,{setup:e}):e}function Bo(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Wn(e,t,n,s,o=!1){if(I(e)){e.forEach((R,O)=>Wn(R,t&&(I(t)?t[O]:t),n,s,o));return}if(yt(s)&&!o)return;const i=s.shapeFlag&4?gs(s.component):s.el,r=o?null:i,{i:l,r:f}=e,p=t&&t.r,u=l.refs===G?l.refs={}:l.refs,h=l.setupState,_=D(h),x=h===G?()=>!1:R=>B(_,R);if(p!=null&&p!==f&&(Q(p)?(u[p]=null,x(p)&&(h[p]=null)):re(p)&&(p.value=null)),L(f))Wt(f,l,12,[r,u]);else{const R=Q(f),O=re(f);if(R||O){const $=()=>{if(e.f){const P=R?x(f)?h[f]:u[f]:f.value;o?I(P)&&es(P,i):I(P)?P.includes(i)||P.push(i):R?(u[f]=[i],x(f)&&(h[f]=u[f])):(f.value=[i],e.k&&(u[e.k]=f.value))}else R?(u[f]=r,x(f)&&(h[f]=r)):O&&(f.value=r,e.k&&(u[e.k]=r))};r?($.id=-1,xe($,n)):$()}}}gn().requestIdleCallback;gn().cancelIdleCallback;const yt=e=>!!e.type.__asyncLoader,_n=e=>e.type.__isKeepAlive;function xr(e,t){ko(e,"a",t)}function Cr(e,t){ko(e,"da",t)}function ko(e,t,n=ie){const s=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(yn(t,s,n),n){let o=n.parent;for(;o&&o.parent;)_n(o.parent.vnode)&&Sr(s,t,n,o),o=o.parent}}function Sr(e,t,n,s){const o=yn(t,e,s,!0);Ko(()=>{es(s[t],o)},n)}function yn(e,t,n=ie,s=!1){if(n){const o=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...r)=>{Ze();const l=Kt(n),f=Re(t,n,e,r);return l(),Qe(),f});return s?o.unshift(i):o.push(i),i}}const ke=e=>(t,n=ie)=>{(!kt||e==="sp")&&yn(e,(...s)=>t(...s),n)},Tr=ke("bm"),ps=ke("m"),Er=ke("bu"),Uo=ke("u"),Wo=ke("bum"),Ko=ke("um"),Ar=ke("sp"),Or=ke("rtg"),Mr=ke("rtc");function Ir(e,t=ie){yn("ec",e,t)}const Rr="components";function Fr(e,t){return Lr(Rr,e,!0,t)||e}const Pr=Symbol.for("v-ndc");function Lr(e,t,n=!0,s=!1){const o=ue||ie;if(o){const i=o.type;{const l=Sl(i,!1);if(l&&(l===t||l===Ae(t)||l===vn(Ae(t))))return i}const r=Ms(o[e]||i[e],t)||Ms(o.appContext[e],t);return!r&&s?i:r}}function Ms(e,t){return e&&(e[t]||e[Ae(t)]||e[vn(Ae(t))])}function Nr(e,t,n,s){let o;const i=n,r=I(e);if(r||Q(e)){const l=r&&bt(e);let f=!1;l&&(f=!Ee(e),e=mn(e)),o=new Array(e.length);for(let p=0,u=e.length;p<u;p++)o[p]=t(f?ae(e[p]):e[p],p,void 0,i)}else if(typeof e=="number"){o=new Array(e);for(let l=0;l<e;l++)o[l]=t(l+1,l,void 0,i)}else if(Y(e))if(e[Symbol.iterator])o=Array.from(e,(l,f)=>t(l,f,void 0,i));else{const l=Object.keys(e);o=new Array(l.length);for(let f=0,p=l.length;f<p;f++){const u=l[f];o[f]=t(e[u],u,f,i)}}else o=[];return o}function qo(e,t,n={},s,o){if(ue.ce||ue.parent&&yt(ue.parent)&&ue.parent.ce)return be(),zt(ve,null,[oe("slot",n,s)],64);let i=e[t];i&&i._c&&(i._d=!1),be();const r=i&&Go(i(n)),l=n.key||r&&r.key,f=zt(ve,{key:(l&&!Be(l)?l:`_${t}`)+(!r&&s?"_fb":"")},r||[],r&&e._===1?64:-2);return i&&i._c&&(i._d=!0),f}function Go(e){return e.some(t=>Bt(t)?!(t.type===ge||t.type===ve&&!Go(t.children)):!0)?e:null}const Kn=e=>e?di(e)?gs(e):Kn(e.parent):null,Pt=ee(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Kn(e.parent),$root:e=>Kn(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>hs(e),$forceUpdate:e=>e.f||(e.f=()=>{us(e.update)}),$nextTick:e=>e.n||(e.n=dr.bind(e.proxy)),$watch:e=>sl.bind(e)}),Fn=(e,t)=>e!==G&&!e.__isScriptSetup&&B(e,t),$r={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:o,props:i,accessCache:r,type:l,appContext:f}=e;let p;if(t[0]!=="$"){const x=r[t];if(x!==void 0)switch(x){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return i[t]}else{if(Fn(s,t))return r[t]=1,s[t];if(o!==G&&B(o,t))return r[t]=2,o[t];if((p=e.propsOptions[0])&&B(p,t))return r[t]=3,i[t];if(n!==G&&B(n,t))return r[t]=4,n[t];qn&&(r[t]=0)}}const u=Pt[t];let h,_;if(u)return t==="$attrs"&&fe(e.attrs,"get",""),u(e);if((h=l.__cssModules)&&(h=h[t]))return h;if(n!==G&&B(n,t))return r[t]=4,n[t];if(_=f.config.globalProperties,B(_,t))return _[t]},set({_:e},t,n){const{data:s,setupState:o,ctx:i}=e;return Fn(o,t)?(o[t]=n,!0):s!==G&&B(s,t)?(s[t]=n,!0):B(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:o,propsOptions:i}},r){let l;return!!n[r]||e!==G&&B(e,r)||Fn(t,r)||(l=i[0])&&B(l,r)||B(s,r)||B(Pt,r)||B(o.config.globalProperties,r)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:B(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Is(e){return I(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let qn=!0;function Hr(e){const t=hs(e),n=e.proxy,s=e.ctx;qn=!1,t.beforeCreate&&Rs(t.beforeCreate,e,"bc");const{data:o,computed:i,methods:r,watch:l,provide:f,inject:p,created:u,beforeMount:h,mounted:_,beforeUpdate:x,updated:R,activated:O,deactivated:$,beforeDestroy:P,beforeUnmount:j,destroyed:V,unmounted:E,render:z,renderTracked:ne,renderTriggered:pe,errorCaptured:me,serverPrefetch:N,expose:U,inheritAttrs:X,components:T,directives:J,filters:le}=t;if(p&&Dr(p,s,null),r)for(const Z in r){const W=r[Z];L(W)&&(s[Z]=W.bind(n))}if(o){const Z=o.call(n,n);Y(Z)&&(e.data=Ht(Z))}if(qn=!0,i)for(const Z in i){const W=i[Z],tt=L(W)?W.bind(n,n):L(W.get)?W.get.bind(n,n):He,qt=!L(W)&&L(W.set)?W.set.bind(n):He,nt=Me({get:tt,set:qt});Object.defineProperty(s,Z,{enumerable:!0,configurable:!0,get:()=>nt.value,set:Fe=>nt.value=Fe})}if(l)for(const Z in l)Yo(l[Z],s,n,Z);if(f){const Z=L(f)?f.call(n):f;Reflect.ownKeys(Z).forEach(W=>{Ur(W,Z[W])})}u&&Rs(u,e,"c");function se(Z,W){I(W)?W.forEach(tt=>Z(tt.bind(n))):W&&Z(W.bind(n))}if(se(Tr,h),se(ps,_),se(Er,x),se(Uo,R),se(xr,O),se(Cr,$),se(Ir,me),se(Mr,ne),se(Or,pe),se(Wo,j),se(Ko,E),se(Ar,N),I(U))if(U.length){const Z=e.exposed||(e.exposed={});U.forEach(W=>{Object.defineProperty(Z,W,{get:()=>n[W],set:tt=>n[W]=tt})})}else e.exposed||(e.exposed={});z&&e.render===He&&(e.render=z),X!=null&&(e.inheritAttrs=X),T&&(e.components=T),J&&(e.directives=J),N&&Bo(e)}function Dr(e,t,n=He){I(e)&&(e=Gn(e));for(const s in e){const o=e[s];let i;Y(o)?"default"in o?i=en(o.from||s,o.default,!0):i=en(o.from||s):i=en(o),re(i)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:r=>i.value=r}):t[s]=i}}function Rs(e,t,n){Re(I(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function Yo(e,t,n,s){let o=s.includes(".")?fi(n,s):()=>n[s];if(Q(e)){const i=t[e];L(i)&&Ln(o,i)}else if(L(e))Ln(o,e.bind(n));else if(Y(e))if(I(e))e.forEach(i=>Yo(i,t,n,s));else{const i=L(e.handler)?e.handler.bind(n):t[e.handler];L(i)&&Ln(o,i,e)}}function hs(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:o,optionsCache:i,config:{optionMergeStrategies:r}}=e.appContext,l=i.get(t);let f;return l?f=l:!o.length&&!n&&!s?f=t:(f={},o.length&&o.forEach(p=>fn(f,p,r,!0)),fn(f,t,r)),Y(t)&&i.set(t,f),f}function fn(e,t,n,s=!1){const{mixins:o,extends:i}=t;i&&fn(e,i,n,!0),o&&o.forEach(r=>fn(e,r,n,!0));for(const r in t)if(!(s&&r==="expose")){const l=jr[r]||n&&n[r];e[r]=l?l(e[r],t[r]):t[r]}return e}const jr={data:Fs,props:Ps,emits:Ps,methods:Mt,computed:Mt,beforeCreate:he,created:he,beforeMount:he,mounted:he,beforeUpdate:he,updated:he,beforeDestroy:he,beforeUnmount:he,destroyed:he,unmounted:he,activated:he,deactivated:he,errorCaptured:he,serverPrefetch:he,components:Mt,directives:Mt,watch:zr,provide:Fs,inject:Vr};function Fs(e,t){return t?e?function(){return ee(L(e)?e.call(this,this):e,L(t)?t.call(this,this):t)}:t:e}function Vr(e,t){return Mt(Gn(e),Gn(t))}function Gn(e){if(I(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function he(e,t){return e?[...new Set([].concat(e,t))]:t}function Mt(e,t){return e?ee(Object.create(null),e,t):t}function Ps(e,t){return e?I(e)&&I(t)?[...new Set([...e,...t])]:ee(Object.create(null),Is(e),Is(t??{})):t}function zr(e,t){if(!e)return t;if(!t)return e;const n=ee(Object.create(null),e);for(const s in t)n[s]=he(e[s],t[s]);return n}function Jo(){return{app:null,config:{isNativeTag:wi,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Br=0;function kr(e,t){return function(s,o=null){L(s)||(s=ee({},s)),o!=null&&!Y(o)&&(o=null);const i=Jo(),r=new WeakSet,l=[];let f=!1;const p=i.app={_uid:Br++,_component:s,_props:o,_container:null,_context:i,_instance:null,version:El,get config(){return i.config},set config(u){},use(u,...h){return r.has(u)||(u&&L(u.install)?(r.add(u),u.install(p,...h)):L(u)&&(r.add(u),u(p,...h))),p},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),p},component(u,h){return h?(i.components[u]=h,p):i.components[u]},directive(u,h){return h?(i.directives[u]=h,p):i.directives[u]},mount(u,h,_){if(!f){const x=p._ceVNode||oe(s,o);return x.appContext=i,_===!0?_="svg":_===!1&&(_=void 0),h&&t?t(x,u):e(x,u,_),f=!0,p._container=u,u.__vue_app__=p,gs(x.component)}},onUnmount(u){l.push(u)},unmount(){f&&(Re(l,p._instance,16),e(null,p._container),delete p._container.__vue_app__)},provide(u,h){return i.provides[u]=h,p},runWithContext(u){const h=wt;wt=p;try{return u()}finally{wt=h}}};return p}}let wt=null;function Ur(e,t){if(ie){let n=ie.provides;const s=ie.parent&&ie.parent.provides;s===n&&(n=ie.provides=Object.create(s)),n[e]=t}}function en(e,t,n=!1){const s=ie||ue;if(s||wt){const o=wt?wt._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(o&&e in o)return o[e];if(arguments.length>1)return n&&L(t)?t.call(s&&s.proxy):t}}const Xo={},Zo=()=>Object.create(Xo),Qo=e=>Object.getPrototypeOf(e)===Xo;function Wr(e,t,n,s=!1){const o={},i=Zo();e.propsDefaults=Object.create(null),ei(e,t,o,i);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);n?e.props=s?o:tr(o):e.type.props?e.props=o:e.props=i,e.attrs=i}function Kr(e,t,n,s){const{props:o,attrs:i,vnode:{patchFlag:r}}=e,l=D(o),[f]=e.propsOptions;let p=!1;if((s||r>0)&&!(r&16)){if(r&8){const u=e.vnode.dynamicProps;for(let h=0;h<u.length;h++){let _=u[h];if(wn(e.emitsOptions,_))continue;const x=t[_];if(f)if(B(i,_))x!==i[_]&&(i[_]=x,p=!0);else{const R=Ae(_);o[R]=Yn(f,l,R,x,e,!1)}else x!==i[_]&&(i[_]=x,p=!0)}}}else{ei(e,t,o,i)&&(p=!0);let u;for(const h in l)(!t||!B(t,h)&&((u=pt(h))===h||!B(t,u)))&&(f?n&&(n[h]!==void 0||n[u]!==void 0)&&(o[h]=Yn(f,l,h,void 0,e,!0)):delete o[h]);if(i!==l)for(const h in i)(!t||!B(t,h))&&(delete i[h],p=!0)}p&&ze(e.attrs,"set","")}function ei(e,t,n,s){const[o,i]=e.propsOptions;let r=!1,l;if(t)for(let f in t){if(It(f))continue;const p=t[f];let u;o&&B(o,u=Ae(f))?!i||!i.includes(u)?n[u]=p:(l||(l={}))[u]=p:wn(e.emitsOptions,f)||(!(f in s)||p!==s[f])&&(s[f]=p,r=!0)}if(i){const f=D(n),p=l||G;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Yn(o,f,h,p[h],e,!B(p,h))}}return r}function Yn(e,t,n,s,o,i){const r=e[n];if(r!=null){const l=B(r,"default");if(l&&s===void 0){const f=r.default;if(r.type!==Function&&!r.skipFactory&&L(f)){const{propsDefaults:p}=o;if(n in p)s=p[n];else{const u=Kt(o);s=p[n]=f.call(null,t),u()}}else s=f;o.ce&&o.ce._setProp(n,s)}r[0]&&(i&&!l?s=!1:r[1]&&(s===""||s===pt(n))&&(s=!0))}return s}const qr=new WeakMap;function ti(e,t,n=!1){const s=n?qr:t.propsCache,o=s.get(e);if(o)return o;const i=e.props,r={},l=[];let f=!1;if(!L(e)){const u=h=>{f=!0;const[_,x]=ti(h,t,!0);ee(r,_),x&&l.push(...x)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!f)return Y(e)&&s.set(e,gt),gt;if(I(i))for(let u=0;u<i.length;u++){const h=Ae(i[u]);Ls(h)&&(r[h]=G)}else if(i)for(const u in i){const h=Ae(u);if(Ls(h)){const _=i[u],x=r[h]=I(_)||L(_)?{type:_}:ee({},_),R=x.type;let O=!1,$=!0;if(I(R))for(let P=0;P<R.length;++P){const j=R[P],V=L(j)&&j.name;if(V==="Boolean"){O=!0;break}else V==="String"&&($=!1)}else O=L(R)&&R.name==="Boolean";x[0]=O,x[1]=$,(O||B(x,"default"))&&l.push(h)}}const p=[r,l];return Y(e)&&s.set(e,p),p}function Ls(e){return e[0]!=="$"&&!It(e)}const ni=e=>e[0]==="_"||e==="$stable",ds=e=>I(e)?e.map($e):[$e(e)],Gr=(e,t,n)=>{if(t._n)return t;const s=Qt((...o)=>ds(t(...o)),n);return s._c=!1,s},si=(e,t,n)=>{const s=e._ctx;for(const o in e){if(ni(o))continue;const i=e[o];if(L(i))t[o]=Gr(o,i,s);else if(i!=null){const r=ds(i);t[o]=()=>r}}},oi=(e,t)=>{const n=ds(t);e.slots.default=()=>n},ii=(e,t,n)=>{for(const s in t)(n||s!=="_")&&(e[s]=t[s])},Yr=(e,t,n)=>{const s=e.slots=Zo();if(e.vnode.shapeFlag&32){const o=t._;o?(ii(s,t,n),n&&fo(s,"_",o,!0)):si(t,s)}else t&&oi(e,t)},Jr=(e,t,n)=>{const{vnode:s,slots:o}=e;let i=!0,r=G;if(s.shapeFlag&32){const l=t._;l?n&&l===1?i=!1:ii(o,t,n):(i=!t.$stable,si(t,o)),r=t}else t&&(oi(e,t),r={default:1});if(i)for(const l in o)!ni(l)&&r[l]==null&&delete o[l]},xe=al;function Xr(e){return Zr(e)}function Zr(e,t){const n=gn();n.__VUE__=!0;const{insert:s,remove:o,patchProp:i,createElement:r,createText:l,createComment:f,setText:p,setElementText:u,parentNode:h,nextSibling:_,setScopeId:x=He,insertStaticContent:R}=e,O=(c,a,d,m=null,v=null,g=null,C=void 0,w=null,y=!!a.dynamicChildren)=>{if(c===a)return;c&&!ct(c,a)&&(m=Gt(c),Fe(c,v,g,!0),c=null),a.patchFlag===-2&&(y=!1,a.dynamicChildren=null);const{type:b,ref:M,shapeFlag:S}=a;switch(b){case xn:$(c,a,d,m);break;case ge:P(c,a,d,m);break;case $n:c==null&&j(a,d,m,C);break;case ve:T(c,a,d,m,v,g,C,w,y);break;default:S&1?z(c,a,d,m,v,g,C,w,y):S&6?J(c,a,d,m,v,g,C,w,y):(S&64||S&128)&&b.process(c,a,d,m,v,g,C,w,y,Ct)}M!=null&&v&&Wn(M,c&&c.ref,g,a||c,!a)},$=(c,a,d,m)=>{if(c==null)s(a.el=l(a.children),d,m);else{const v=a.el=c.el;a.children!==c.children&&p(v,a.children)}},P=(c,a,d,m)=>{c==null?s(a.el=f(a.children||""),d,m):a.el=c.el},j=(c,a,d,m)=>{[c.el,c.anchor]=R(c.children,a,d,m,c.el,c.anchor)},V=({el:c,anchor:a},d,m)=>{let v;for(;c&&c!==a;)v=_(c),s(c,d,m),c=v;s(a,d,m)},E=({el:c,anchor:a})=>{let d;for(;c&&c!==a;)d=_(c),o(c),c=d;o(a)},z=(c,a,d,m,v,g,C,w,y)=>{a.type==="svg"?C="svg":a.type==="math"&&(C="mathml"),c==null?ne(a,d,m,v,g,C,w,y):N(c,a,v,g,C,w,y)},ne=(c,a,d,m,v,g,C,w)=>{let y,b;const{props:M,shapeFlag:S,transition:A,dirs:F}=c;if(y=c.el=r(c.type,g,M&&M.is,M),S&8?u(y,c.children):S&16&&me(c.children,y,null,m,v,Pn(c,g),C,w),F&&st(c,null,m,"created"),pe(y,c,c.scopeId,C,m),M){for(const K in M)K!=="value"&&!It(K)&&i(y,K,null,M[K],g,m);"value"in M&&i(y,"value",null,M.value,g),(b=M.onVnodeBeforeMount)&&Le(b,m,c)}F&&st(c,null,m,"beforeMount");const H=Qr(v,A);H&&A.beforeEnter(y),s(y,a,d),((b=M&&M.onVnodeMounted)||H||F)&&xe(()=>{b&&Le(b,m,c),H&&A.enter(y),F&&st(c,null,m,"mounted")},v)},pe=(c,a,d,m,v)=>{if(d&&x(c,d),m)for(let g=0;g<m.length;g++)x(c,m[g]);if(v){let g=v.subTree;if(a===g||ui(g.type)&&(g.ssContent===a||g.ssFallback===a)){const C=v.vnode;pe(c,C,C.scopeId,C.slotScopeIds,v.parent)}}},me=(c,a,d,m,v,g,C,w,y=0)=>{for(let b=y;b<c.length;b++){const M=c[b]=w?Ge(c[b]):$e(c[b]);O(null,M,a,d,m,v,g,C,w)}},N=(c,a,d,m,v,g,C)=>{const w=a.el=c.el;let{patchFlag:y,dynamicChildren:b,dirs:M}=a;y|=c.patchFlag&16;const S=c.props||G,A=a.props||G;let F;if(d&&ot(d,!1),(F=A.onVnodeBeforeUpdate)&&Le(F,d,a,c),M&&st(a,c,d,"beforeUpdate"),d&&ot(d,!0),(S.innerHTML&&A.innerHTML==null||S.textContent&&A.textContent==null)&&u(w,""),b?U(c.dynamicChildren,b,w,d,m,Pn(a,v),g):C||W(c,a,w,null,d,m,Pn(a,v),g,!1),y>0){if(y&16)X(w,S,A,d,v);else if(y&2&&S.class!==A.class&&i(w,"class",null,A.class,v),y&4&&i(w,"style",S.style,A.style,v),y&8){const H=a.dynamicProps;for(let K=0;K<H.length;K++){const k=H[K],_e=S[k],ce=A[k];(ce!==_e||k==="value")&&i(w,k,_e,ce,v,d)}}y&1&&c.children!==a.children&&u(w,a.children)}else!C&&b==null&&X(w,S,A,d,v);((F=A.onVnodeUpdated)||M)&&xe(()=>{F&&Le(F,d,a,c),M&&st(a,c,d,"updated")},m)},U=(c,a,d,m,v,g,C)=>{for(let w=0;w<a.length;w++){const y=c[w],b=a[w],M=y.el&&(y.type===ve||!ct(y,b)||y.shapeFlag&70)?h(y.el):d;O(y,b,M,null,m,v,g,C,!0)}},X=(c,a,d,m,v)=>{if(a!==d){if(a!==G)for(const g in a)!It(g)&&!(g in d)&&i(c,g,a[g],null,v,m);for(const g in d){if(It(g))continue;const C=d[g],w=a[g];C!==w&&g!=="value"&&i(c,g,w,C,v,m)}"value"in d&&i(c,"value",a.value,d.value,v)}},T=(c,a,d,m,v,g,C,w,y)=>{const b=a.el=c?c.el:l(""),M=a.anchor=c?c.anchor:l("");let{patchFlag:S,dynamicChildren:A,slotScopeIds:F}=a;F&&(w=w?w.concat(F):F),c==null?(s(b,d,m),s(M,d,m),me(a.children||[],d,M,v,g,C,w,y)):S>0&&S&64&&A&&c.dynamicChildren?(U(c.dynamicChildren,A,d,v,g,C,w),(a.key!=null||v&&a===v.subTree)&&ri(c,a,!0)):W(c,a,d,M,v,g,C,w,y)},J=(c,a,d,m,v,g,C,w,y)=>{a.slotScopeIds=w,c==null?a.shapeFlag&512?v.ctx.activate(a,d,m,C,y):le(a,d,m,v,g,C,y):et(c,a,y)},le=(c,a,d,m,v,g,C)=>{const w=c.component=bl(c,m,v);if(_n(c)&&(w.ctx.renderer=Ct),yl(w,!1,C),w.asyncDep){if(v&&v.registerDep(w,se,C),!c.el){const y=w.subTree=oe(ge);P(null,y,a,d)}}else se(w,c,a,d,v,g,C)},et=(c,a,d)=>{const m=a.component=c.component;if(cl(c,a,d))if(m.asyncDep&&!m.asyncResolved){Z(m,a,d);return}else m.next=a,m.update();else a.el=c.el,m.vnode=a},se=(c,a,d,m,v,g,C)=>{const w=()=>{if(c.isMounted){let{next:S,bu:A,u:F,parent:H,vnode:K}=c;{const ye=li(c);if(ye){S&&(S.el=K.el,Z(c,S,C)),ye.asyncDep.then(()=>{c.isUnmounted||w()});return}}let k=S,_e;ot(c,!1),S?(S.el=K.el,Z(c,S,C)):S=K,A&&En(A),(_e=S.props&&S.props.onVnodeBeforeUpdate)&&Le(_e,H,S,K),ot(c,!0);const ce=Nn(c),Oe=c.subTree;c.subTree=ce,O(Oe,ce,h(Oe.el),Gt(Oe),c,v,g),S.el=ce.el,k===null&&fl(c,ce.el),F&&xe(F,v),(_e=S.props&&S.props.onVnodeUpdated)&&xe(()=>Le(_e,H,S,K),v)}else{let S;const{el:A,props:F}=a,{bm:H,m:K,parent:k,root:_e,type:ce}=c,Oe=yt(a);if(ot(c,!1),H&&En(H),!Oe&&(S=F&&F.onVnodeBeforeMount)&&Le(S,k,a),ot(c,!0),A&&ws){const ye=()=>{c.subTree=Nn(c),ws(A,c.subTree,c,v,null)};Oe&&ce.__asyncHydrate?ce.__asyncHydrate(A,c,ye):ye()}else{_e.ce&&_e.ce._injectChildStyle(ce);const ye=c.subTree=Nn(c);O(null,ye,d,m,c,v,g),a.el=ye.el}if(K&&xe(K,v),!Oe&&(S=F&&F.onVnodeMounted)){const ye=a;xe(()=>Le(S,k,ye),v)}(a.shapeFlag&256||k&&yt(k.vnode)&&k.vnode.shapeFlag&256)&&c.a&&xe(c.a,v),c.isMounted=!0,a=d=m=null}};c.scope.on();const y=c.effect=new ho(w);c.scope.off();const b=c.update=y.run.bind(y),M=c.job=y.runIfDirty.bind(y);M.i=c,M.id=c.uid,y.scheduler=()=>us(M),ot(c,!0),b()},Z=(c,a,d)=>{a.component=c;const m=c.vnode.props;c.vnode=a,c.next=null,Kr(c,a.props,m,d),Jr(c,a.children,d),Ze(),As(c),Qe()},W=(c,a,d,m,v,g,C,w,y=!1)=>{const b=c&&c.children,M=c?c.shapeFlag:0,S=a.children,{patchFlag:A,shapeFlag:F}=a;if(A>0){if(A&128){qt(b,S,d,m,v,g,C,w,y);return}else if(A&256){tt(b,S,d,m,v,g,C,w,y);return}}F&8?(M&16&&xt(b,v,g),S!==b&&u(d,S)):M&16?F&16?qt(b,S,d,m,v,g,C,w,y):xt(b,v,g,!0):(M&8&&u(d,""),F&16&&me(S,d,m,v,g,C,w,y))},tt=(c,a,d,m,v,g,C,w,y)=>{c=c||gt,a=a||gt;const b=c.length,M=a.length,S=Math.min(b,M);let A;for(A=0;A<S;A++){const F=a[A]=y?Ge(a[A]):$e(a[A]);O(c[A],F,d,null,v,g,C,w,y)}b>M?xt(c,v,g,!0,!1,S):me(a,d,m,v,g,C,w,y,S)},qt=(c,a,d,m,v,g,C,w,y)=>{let b=0;const M=a.length;let S=c.length-1,A=M-1;for(;b<=S&&b<=A;){const F=c[b],H=a[b]=y?Ge(a[b]):$e(a[b]);if(ct(F,H))O(F,H,d,null,v,g,C,w,y);else break;b++}for(;b<=S&&b<=A;){const F=c[S],H=a[A]=y?Ge(a[A]):$e(a[A]);if(ct(F,H))O(F,H,d,null,v,g,C,w,y);else break;S--,A--}if(b>S){if(b<=A){const F=A+1,H=F<M?a[F].el:m;for(;b<=A;)O(null,a[b]=y?Ge(a[b]):$e(a[b]),d,H,v,g,C,w,y),b++}}else if(b>A)for(;b<=S;)Fe(c[b],v,g,!0),b++;else{const F=b,H=b,K=new Map;for(b=H;b<=A;b++){const we=a[b]=y?Ge(a[b]):$e(a[b]);we.key!=null&&K.set(we.key,b)}let k,_e=0;const ce=A-H+1;let Oe=!1,ye=0;const St=new Array(ce);for(b=0;b<ce;b++)St[b]=0;for(b=F;b<=S;b++){const we=c[b];if(_e>=ce){Fe(we,v,g,!0);continue}let Pe;if(we.key!=null)Pe=K.get(we.key);else for(k=H;k<=A;k++)if(St[k-H]===0&&ct(we,a[k])){Pe=k;break}Pe===void 0?Fe(we,v,g,!0):(St[Pe-H]=b+1,Pe>=ye?ye=Pe:Oe=!0,O(we,a[Pe],d,null,v,g,C,w,y),_e++)}const xs=Oe?el(St):gt;for(k=xs.length-1,b=ce-1;b>=0;b--){const we=H+b,Pe=a[we],Cs=we+1<M?a[we+1].el:m;St[b]===0?O(null,Pe,d,Cs,v,g,C,w,y):Oe&&(k<0||b!==xs[k]?nt(Pe,d,Cs,2):k--)}}},nt=(c,a,d,m,v=null)=>{const{el:g,type:C,transition:w,children:y,shapeFlag:b}=c;if(b&6){nt(c.component.subTree,a,d,m);return}if(b&128){c.suspense.move(a,d,m);return}if(b&64){C.move(c,a,d,Ct);return}if(C===ve){s(g,a,d);for(let S=0;S<y.length;S++)nt(y[S],a,d,m);s(c.anchor,a,d);return}if(C===$n){V(c,a,d);return}if(m!==2&&b&1&&w)if(m===0)w.beforeEnter(g),s(g,a,d),xe(()=>w.enter(g),v);else{const{leave:S,delayLeave:A,afterLeave:F}=w,H=()=>s(g,a,d),K=()=>{S(g,()=>{H(),F&&F()})};A?A(g,H,K):K()}else s(g,a,d)},Fe=(c,a,d,m=!1,v=!1)=>{const{type:g,props:C,ref:w,children:y,dynamicChildren:b,shapeFlag:M,patchFlag:S,dirs:A,cacheIndex:F}=c;if(S===-2&&(v=!1),w!=null&&Wn(w,null,d,c,!0),F!=null&&(a.renderCache[F]=void 0),M&256){a.ctx.deactivate(c);return}const H=M&1&&A,K=!yt(c);let k;if(K&&(k=C&&C.onVnodeBeforeUnmount)&&Le(k,a,c),M&6)yi(c.component,d,m);else{if(M&128){c.suspense.unmount(d,m);return}H&&st(c,null,a,"beforeUnmount"),M&64?c.type.remove(c,a,d,Ct,m):b&&!b.hasOnce&&(g!==ve||S>0&&S&64)?xt(b,a,d,!1,!0):(g===ve&&S&384||!v&&M&16)&&xt(y,a,d),m&&bs(c)}(K&&(k=C&&C.onVnodeUnmounted)||H)&&xe(()=>{k&&Le(k,a,c),H&&st(c,null,a,"unmounted")},d)},bs=c=>{const{type:a,el:d,anchor:m,transition:v}=c;if(a===ve){_i(d,m);return}if(a===$n){E(c);return}const g=()=>{o(d),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(c.shapeFlag&1&&v&&!v.persisted){const{leave:C,delayLeave:w}=v,y=()=>C(d,g);w?w(c.el,g,y):y()}else g()},_i=(c,a)=>{let d;for(;c!==a;)d=_(c),o(c),c=d;o(a)},yi=(c,a,d)=>{const{bum:m,scope:v,job:g,subTree:C,um:w,m:y,a:b}=c;Ns(y),Ns(b),m&&En(m),v.stop(),g&&(g.flags|=8,Fe(C,c,a,d)),w&&xe(w,a),xe(()=>{c.isUnmounted=!0},a),a&&a.pendingBranch&&!a.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===a.pendingId&&(a.deps--,a.deps===0&&a.resolve())},xt=(c,a,d,m=!1,v=!1,g=0)=>{for(let C=g;C<c.length;C++)Fe(c[C],a,d,m,v)},Gt=c=>{if(c.shapeFlag&6)return Gt(c.component.subTree);if(c.shapeFlag&128)return c.suspense.next();const a=_(c.anchor||c.el),d=a&&a[mr];return d?_(d):a};let Sn=!1;const _s=(c,a,d)=>{c==null?a._vnode&&Fe(a._vnode,null,null,!0):O(a._vnode||null,c,a,null,null,null,d),a._vnode=c,Sn||(Sn=!0,As(),Po(),Sn=!1)},Ct={p:O,um:Fe,m:nt,r:bs,mt:le,mc:me,pc:W,pbc:U,n:Gt,o:e};let ys,ws;return{render:_s,hydrate:ys,createApp:kr(_s,ys)}}function Pn({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function ot({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Qr(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function ri(e,t,n=!1){const s=e.children,o=t.children;if(I(s)&&I(o))for(let i=0;i<s.length;i++){const r=s[i];let l=o[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=o[i]=Ge(o[i]),l.el=r.el),!n&&l.patchFlag!==-2&&ri(r,l)),l.type===xn&&(l.el=r.el)}}function el(e){const t=e.slice(),n=[0];let s,o,i,r,l;const f=e.length;for(s=0;s<f;s++){const p=e[s];if(p!==0){if(o=n[n.length-1],e[o]<p){t[s]=o,n.push(s);continue}for(i=0,r=n.length-1;i<r;)l=i+r>>1,e[n[l]]<p?i=l+1:r=l;p<e[n[i]]&&(i>0&&(t[s]=n[i-1]),n[i]=s)}}for(i=n.length,r=n[i-1];i-- >0;)n[i]=r,r=t[r];return n}function li(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:li(t)}function Ns(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const tl=Symbol.for("v-scx"),nl=()=>en(tl);function Ln(e,t,n){return ci(e,t,n)}function ci(e,t,n=G){const{immediate:s,deep:o,flush:i,once:r}=n,l=ee({},n),f=t&&s||!t&&i!=="post";let p;if(kt){if(i==="sync"){const x=nl();p=x.__watcherHandles||(x.__watcherHandles=[])}else if(!f){const x=()=>{};return x.stop=He,x.resume=He,x.pause=He,x}}const u=ie;l.call=(x,R,O)=>Re(x,u,R,O);let h=!1;i==="post"?l.scheduler=x=>{xe(x,u&&u.suspense)}:i!=="sync"&&(h=!0,l.scheduler=(x,R)=>{R?x():us(x)}),l.augmentJob=x=>{t&&(x.flags|=4),h&&(x.flags|=2,u&&(x.id=u.uid,x.i=u))};const _=pr(e,t,l);return kt&&(p?p.push(_):f&&_()),_}function sl(e,t,n){const s=this.proxy,o=Q(e)?e.includes(".")?fi(s,e):()=>s[e]:e.bind(s,s);let i;L(t)?i=t:(i=t.handler,n=t);const r=Kt(this),l=ci(o,i.bind(s),n);return r(),l}function fi(e,t){const n=t.split(".");return()=>{let s=e;for(let o=0;o<n.length&&s;o++)s=s[n[o]];return s}}const ol=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ae(t)}Modifiers`]||e[`${pt(t)}Modifiers`];function il(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||G;let o=n;const i=t.startsWith("update:"),r=i&&ol(s,t.slice(7));r&&(r.trim&&(o=n.map(u=>Q(u)?u.trim():u)),r.number&&(o=n.map(Ei)));let l,f=s[l=Tn(t)]||s[l=Tn(Ae(t))];!f&&i&&(f=s[l=Tn(pt(t))]),f&&Re(f,e,6,o);const p=s[l+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Re(p,e,6,o)}}function ai(e,t,n=!1){const s=t.emitsCache,o=s.get(e);if(o!==void 0)return o;const i=e.emits;let r={},l=!1;if(!L(e)){const f=p=>{const u=ai(p,t,!0);u&&(l=!0,ee(r,u))};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}return!i&&!l?(Y(e)&&s.set(e,null),null):(I(i)?i.forEach(f=>r[f]=null):ee(r,i),Y(e)&&s.set(e,r),r)}function wn(e,t){return!e||!pn(t)?!1:(t=t.slice(2).replace(/Once$/,""),B(e,t[0].toLowerCase()+t.slice(1))||B(e,pt(t))||B(e,t))}function Nn(e){const{type:t,vnode:n,proxy:s,withProxy:o,propsOptions:[i],slots:r,attrs:l,emit:f,render:p,renderCache:u,props:h,data:_,setupState:x,ctx:R,inheritAttrs:O}=e,$=cn(e);let P,j;try{if(n.shapeFlag&4){const E=o||s,z=E;P=$e(p.call(z,E,u,h,x,_,R)),j=l}else{const E=t;P=$e(E.length>1?E(h,{attrs:l,slots:r,emit:f}):E(h,null)),j=t.props?l:rl(l)}}catch(E){Lt.length=0,bn(E,e,1),P=oe(ge)}let V=P;if(j&&O!==!1){const E=Object.keys(j),{shapeFlag:z}=V;E.length&&z&7&&(i&&E.some(Qn)&&(j=ll(j,i)),V=Xe(V,j,!1,!0))}return n.dirs&&(V=Xe(V,null,!1,!0),V.dirs=V.dirs?V.dirs.concat(n.dirs):n.dirs),n.transition&&jt(V,n.transition),P=V,cn($),P}const rl=e=>{let t;for(const n in e)(n==="class"||n==="style"||pn(n))&&((t||(t={}))[n]=e[n]);return t},ll=(e,t)=>{const n={};for(const s in e)(!Qn(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function cl(e,t,n){const{props:s,children:o,component:i}=e,{props:r,children:l,patchFlag:f}=t,p=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&f>=0){if(f&1024)return!0;if(f&16)return s?$s(s,r,p):!!r;if(f&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const _=u[h];if(r[_]!==s[_]&&!wn(p,_))return!0}}}else return(o||l)&&(!l||!l.$stable)?!0:s===r?!1:s?r?$s(s,r,p):!0:!!r;return!1}function $s(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let o=0;o<s.length;o++){const i=s[o];if(t[i]!==e[i]&&!wn(n,i))return!0}return!1}function fl({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const ui=e=>e.__isSuspense;function al(e,t){t&&t.pendingBranch?I(e)?t.effects.push(...e):t.effects.push(e):gr(e)}const ve=Symbol.for("v-fgt"),xn=Symbol.for("v-txt"),ge=Symbol.for("v-cmt"),$n=Symbol.for("v-stc"),Lt=[];let Se=null;function be(e=!1){Lt.push(Se=e?null:[])}function ul(){Lt.pop(),Se=Lt[Lt.length-1]||null}let Vt=1;function Hs(e){Vt+=e,e<0&&Se&&(Se.hasOnce=!0)}function pi(e){return e.dynamicChildren=Vt>0?Se||gt:null,ul(),Vt>0&&Se&&Se.push(e),e}function Ve(e,t,n,s,o,i){return pi(te(e,t,n,s,o,i,!0))}function zt(e,t,n,s,o){return pi(oe(e,t,n,s,o,!0))}function Bt(e){return e?e.__v_isVNode===!0:!1}function ct(e,t){return e.type===t.type&&e.key===t.key}const hi=({key:e})=>e??null,tn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Q(e)||re(e)||L(e)?{i:ue,r:e,k:t,f:!!n}:e:null);function te(e,t=null,n=null,s=0,o=null,i=e===ve?0:1,r=!1,l=!1){const f={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&hi(t),ref:t&&tn(t),scopeId:No,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:ue};return l?(vs(f,n),i&128&&e.normalize(f)):n&&(f.shapeFlag|=Q(n)?8:16),Vt>0&&!r&&Se&&(f.patchFlag>0||i&6)&&f.patchFlag!==32&&Se.push(f),f}const oe=pl;function pl(e,t=null,n=null,s=0,o=null,i=!1){if((!e||e===Pr)&&(e=ge),Bt(e)){const l=Xe(e,t,!0);return n&&vs(l,n),Vt>0&&!i&&Se&&(l.shapeFlag&6?Se[Se.indexOf(e)]=l:Se.push(l)),l.patchFlag=-2,l}if(Tl(e)&&(e=e.__vccOpts),t){t=hl(t);let{class:l,style:f}=t;l&&!Q(l)&&(t.class=ss(l)),Y(f)&&(as(f)&&!I(f)&&(f=ee({},f)),t.style=ns(f))}const r=Q(e)?1:ui(e)?128:$o(e)?64:Y(e)?4:L(e)?2:0;return te(e,t,n,s,o,r,i,!0)}function hl(e){return e?as(e)||Qo(e)?ee({},e):e:null}function Xe(e,t,n=!1,s=!1){const{props:o,ref:i,patchFlag:r,children:l,transition:f}=e,p=t?vl(o||{},t):o,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:p,key:p&&hi(p),ref:t&&t.ref?n&&i?I(i)?i.concat(tn(t)):[i,tn(t)]:tn(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ve?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:f,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Xe(e.ssContent),ssFallback:e.ssFallback&&Xe(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return f&&s&&jt(u,f.clone(u)),u}function dl(e=" ",t=0){return oe(xn,null,e,t)}function Et(e="",t=!1){return t?(be(),zt(ge,null,e)):oe(ge,null,e)}function $e(e){return e==null||typeof e=="boolean"?oe(ge):I(e)?oe(ve,null,e.slice()):Bt(e)?Ge(e):oe(xn,null,String(e))}function Ge(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Xe(e)}function vs(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(I(t))n=16;else if(typeof t=="object")if(s&65){const o=t.default;o&&(o._c&&(o._d=!1),vs(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!Qo(t)?t._ctx=ue:o===3&&ue&&(ue.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else L(t)?(t={default:t,_ctx:ue},n=32):(t=String(t),s&64?(n=16,t=[dl(t)]):n=8);e.children=t,e.shapeFlag|=n}function vl(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const o in s)if(o==="class")t.class!==s.class&&(t.class=ss([t.class,s.class]));else if(o==="style")t.style=ns([t.style,s.style]);else if(pn(o)){const i=t[o],r=s[o];r&&i!==r&&!(I(i)&&i.includes(r))&&(t[o]=i?[].concat(i,r):r)}else o!==""&&(t[o]=s[o])}return t}function Le(e,t,n,s=null){Re(e,t,7,[n,s])}const gl=Jo();let ml=0;function bl(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||gl,i={uid:ml++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Li(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ti(s,o),emitsOptions:ai(s,o),emit:null,emitted:null,propsDefaults:G,inheritAttrs:s.inheritAttrs,ctx:G,data:G,props:G,attrs:G,slots:G,refs:G,setupState:G,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=il.bind(null,i),e.ce&&e.ce(i),i}let ie=null;const _l=()=>ie||ue;let an,Jn;{const e=gn(),t=(n,s)=>{let o;return(o=e[n])||(o=e[n]=[]),o.push(s),i=>{o.length>1?o.forEach(r=>r(i)):o[0](i)}};an=t("__VUE_INSTANCE_SETTERS__",n=>ie=n),Jn=t("__VUE_SSR_SETTERS__",n=>kt=n)}const Kt=e=>{const t=ie;return an(e),e.scope.on(),()=>{e.scope.off(),an(t)}},Ds=()=>{ie&&ie.scope.off(),an(null)};function di(e){return e.vnode.shapeFlag&4}let kt=!1;function yl(e,t=!1,n=!1){t&&Jn(t);const{props:s,children:o}=e.vnode,i=di(e);Wr(e,s,i,t),Yr(e,o,n);const r=i?wl(e,t):void 0;return t&&Jn(!1),r}function wl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,$r);const{setup:s}=n;if(s){Ze();const o=e.setupContext=s.length>1?Cl(e):null,i=Kt(e),r=Wt(s,e,0,[e.props,o]),l=ro(r);if(Qe(),i(),(l||e.sp)&&!yt(e)&&Bo(e),l){if(r.then(Ds,Ds),t)return r.then(f=>{js(e,f,t)}).catch(f=>{bn(f,e,0)});e.asyncDep=r}else js(e,r,t)}else vi(e,t)}function js(e,t,n){L(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Y(t)&&(e.setupState=Io(t)),vi(e,n)}let Vs;function vi(e,t,n){const s=e.type;if(!e.render){if(!t&&Vs&&!s.render){const o=s.template||hs(e).template;if(o){const{isCustomElement:i,compilerOptions:r}=e.appContext.config,{delimiters:l,compilerOptions:f}=s,p=ee(ee({isCustomElement:i,delimiters:l},r),f);s.render=Vs(o,p)}}e.render=s.render||He}{const o=Kt(e);Ze();try{Hr(e)}finally{Qe(),o()}}}const xl={get(e,t){return fe(e,"get",""),e[t]}};function Cl(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,xl),slots:e.slots,emit:e.emit,expose:t}}function gs(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Io(nr(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Pt)return Pt[n](e)},has(t,n){return n in t||n in Pt}})):e.proxy}function Sl(e,t=!0){return L(e)?e.displayName||e.name:e.name||t&&e.__name}function Tl(e){return L(e)&&"__vccOpts"in e}const Me=(e,t)=>ar(e,t,kt);function nn(e,t,n){const s=arguments.length;return s===2?Y(t)&&!I(t)?Bt(t)?oe(e,null,[t]):oe(e,t):oe(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Bt(n)&&(n=[n]),oe(e,t,n))}const El="3.5.12";/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Xn;const zs=typeof window<"u"&&window.trustedTypes;if(zs)try{Xn=zs.createPolicy("vue",{createHTML:e=>e})}catch{}const gi=Xn?e=>Xn.createHTML(e):e=>e,Al="http://www.w3.org/2000/svg",Ol="http://www.w3.org/1998/Math/MathML",je=typeof document<"u"?document:null,Bs=je&&je.createElement("template"),Ml={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const o=t==="svg"?je.createElementNS(Al,e):t==="mathml"?je.createElementNS(Ol,e):n?je.createElement(e,{is:n}):je.createElement(e);return e==="select"&&s&&s.multiple!=null&&o.setAttribute("multiple",s.multiple),o},createText:e=>je.createTextNode(e),createComment:e=>je.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>je.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,o,i){const r=n?n.previousSibling:t.lastChild;if(o&&(o===i||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===i||!(o=o.nextSibling)););else{Bs.innerHTML=gi(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const l=Bs.content;if(s==="svg"||s==="mathml"){const f=l.firstChild;for(;f.firstChild;)l.appendChild(f.firstChild);l.removeChild(f)}t.insertBefore(l,n)}return[r?r.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Ue="transition",At="animation",Ut=Symbol("_vtc"),mi={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Il=ee({},Ho,mi),Rl=e=>(e.displayName="Transition",e.props=Il,e),ks=Rl((e,{slots:t})=>nn(yr,Fl(e),t)),it=(e,t=[])=>{I(e)?e.forEach(n=>n(...t)):e&&e(...t)},Us=e=>e?I(e)?e.some(t=>t.length>1):e.length>1:!1;function Fl(e){const t={};for(const T in e)T in mi||(t[T]=e[T]);if(e.css===!1)return t;const{name:n="v",type:s,duration:o,enterFromClass:i=`${n}-enter-from`,enterActiveClass:r=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:f=i,appearActiveClass:p=r,appearToClass:u=l,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:_=`${n}-leave-active`,leaveToClass:x=`${n}-leave-to`}=e,R=Pl(o),O=R&&R[0],$=R&&R[1],{onBeforeEnter:P,onEnter:j,onEnterCancelled:V,onLeave:E,onLeaveCancelled:z,onBeforeAppear:ne=P,onAppear:pe=j,onAppearCancelled:me=V}=t,N=(T,J,le)=>{rt(T,J?u:l),rt(T,J?p:r),le&&le()},U=(T,J)=>{T._isLeaving=!1,rt(T,h),rt(T,x),rt(T,_),J&&J()},X=T=>(J,le)=>{const et=T?pe:j,se=()=>N(J,T,le);it(et,[J,se]),Ws(()=>{rt(J,T?f:i),We(J,T?u:l),Us(et)||Ks(J,s,O,se)})};return ee(t,{onBeforeEnter(T){it(P,[T]),We(T,i),We(T,r)},onBeforeAppear(T){it(ne,[T]),We(T,f),We(T,p)},onEnter:X(!1),onAppear:X(!0),onLeave(T,J){T._isLeaving=!0;const le=()=>U(T,J);We(T,h),We(T,_),$l(),Ws(()=>{T._isLeaving&&(rt(T,h),We(T,x),Us(E)||Ks(T,s,$,le))}),it(E,[T,le])},onEnterCancelled(T){N(T,!1),it(V,[T])},onAppearCancelled(T){N(T,!0),it(me,[T])},onLeaveCancelled(T){U(T),it(z,[T])}})}function Pl(e){if(e==null)return null;if(Y(e))return[Hn(e.enter),Hn(e.leave)];{const t=Hn(e);return[t,t]}}function Hn(e){return Ai(e)}function We(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[Ut]||(e[Ut]=new Set)).add(t)}function rt(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const n=e[Ut];n&&(n.delete(t),n.size||(e[Ut]=void 0))}function Ws(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Ll=0;function Ks(e,t,n,s){const o=e._endId=++Ll,i=()=>{o===e._endId&&s()};if(n!=null)return setTimeout(i,n);const{type:r,timeout:l,propCount:f}=Nl(e,t);if(!r)return s();const p=r+"end";let u=0;const h=()=>{e.removeEventListener(p,_),i()},_=x=>{x.target===e&&++u>=f&&h()};setTimeout(()=>{u<f&&h()},l+1),e.addEventListener(p,_)}function Nl(e,t){const n=window.getComputedStyle(e),s=R=>(n[R]||"").split(", "),o=s(`${Ue}Delay`),i=s(`${Ue}Duration`),r=qs(o,i),l=s(`${At}Delay`),f=s(`${At}Duration`),p=qs(l,f);let u=null,h=0,_=0;t===Ue?r>0&&(u=Ue,h=r,_=i.length):t===At?p>0&&(u=At,h=p,_=f.length):(h=Math.max(r,p),u=h>0?r>p?Ue:At:null,_=u?u===Ue?i.length:f.length:0);const x=u===Ue&&/\b(transform|all)(,|$)/.test(s(`${Ue}Property`).toString());return{type:u,timeout:h,propCount:_,hasTransform:x}}function qs(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>Gs(n)+Gs(e[s])))}function Gs(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function $l(){return document.body.offsetHeight}function Hl(e,t,n){const s=e[Ut];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Ys=Symbol("_vod"),Dl=Symbol("_vsh"),jl=Symbol(""),Vl=/(^|;)\s*display\s*:/;function zl(e,t,n){const s=e.style,o=Q(n);let i=!1;if(n&&!o){if(t)if(Q(t))for(const r of t.split(";")){const l=r.slice(0,r.indexOf(":")).trim();n[l]==null&&sn(s,l,"")}else for(const r in t)n[r]==null&&sn(s,r,"");for(const r in n)r==="display"&&(i=!0),sn(s,r,n[r])}else if(o){if(t!==n){const r=s[jl];r&&(n+=";"+r),s.cssText=n,i=Vl.test(n)}}else t&&e.removeAttribute("style");Ys in e&&(e[Ys]=i?s.display:"",e[Dl]&&(s.display="none"))}const Js=/\s*!important$/;function sn(e,t,n){if(I(n))n.forEach(s=>sn(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=Bl(e,t);Js.test(n)?e.setProperty(pt(s),n.replace(Js,""),"important"):e[s]=n}}const Xs=["Webkit","Moz","ms"],Dn={};function Bl(e,t){const n=Dn[t];if(n)return n;let s=Ae(t);if(s!=="filter"&&s in e)return Dn[t]=s;s=vn(s);for(let o=0;o<Xs.length;o++){const i=Xs[o]+s;if(i in e)return Dn[t]=i}return t}const Zs="http://www.w3.org/1999/xlink";function Qs(e,t,n,s,o,i=Pi(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Zs,t.slice(6,t.length)):e.setAttributeNS(Zs,t,n):n==null||i&&!ao(n)?e.removeAttribute(t):e.setAttribute(t,i?"":Be(n)?String(n):n)}function eo(e,t,n,s,o){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?gi(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?e.getAttribute("value")||"":e.value,f=n==null?e.type==="checkbox"?"on":"":String(n);(l!==f||!("_value"in e))&&(e.value=f),n==null&&e.removeAttribute(t),e._value=n;return}let r=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=ao(n):n==null&&l==="string"?(n="",r=!0):l==="number"&&(n=0,r=!0)}try{e[t]=n}catch{}r&&e.removeAttribute(o||t)}function kl(e,t,n,s){e.addEventListener(t,n,s)}function Ul(e,t,n,s){e.removeEventListener(t,n,s)}const to=Symbol("_vei");function Wl(e,t,n,s,o=null){const i=e[to]||(e[to]={}),r=i[t];if(s&&r)r.value=s;else{const[l,f]=Kl(t);if(s){const p=i[t]=Yl(s,o);kl(e,l,p,f)}else r&&(Ul(e,l,r,f),i[t]=void 0)}}const no=/(?:Once|Passive|Capture)$/;function Kl(e){let t;if(no.test(e)){t={};let s;for(;s=e.match(no);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):pt(e.slice(2)),t]}let jn=0;const ql=Promise.resolve(),Gl=()=>jn||(ql.then(()=>jn=0),jn=Date.now());function Yl(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Re(Jl(s,n.value),t,5,[s])};return n.value=e,n.attached=Gl(),n}function Jl(e,t){if(I(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>o=>!o._stopped&&s&&s(o))}else return t}const so=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Xl=(e,t,n,s,o,i)=>{const r=o==="svg";t==="class"?Hl(e,s,r):t==="style"?zl(e,n,s):pn(t)?Qn(t)||Wl(e,t,n,s,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Zl(e,t,s,r))?(eo(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Qs(e,t,s,r,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Q(s))?eo(e,Ae(t),s,i,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),Qs(e,t,s,r))};function Zl(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&so(t)&&L(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=e.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return so(t)&&Q(n)?!1:t in e}const Ql=ee({patchProp:Xl},Ml);let oo;function ec(){return oo||(oo=Xr(Ql))}const tc=(...e)=>{const t=ec().createApp(...e),{mount:n}=t;return t.mount=s=>{const o=sc(s);if(!o)return;const i=t._component;!L(i)&&!i.render&&!i.template&&(i.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const r=n(o,!1,nc(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),r},t};function nc(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function sc(e){return Q(e)?document.querySelector(e):e}const Cn=(e,t)=>{const n=e.__vccOpts||e;for(const[s,o]of t)n[s]=o;return n},oc={class:"card-content"},ic={class:"title"},rc={class:"icon"},lc={class:"foot"},cc={class:"push"},fc={__name:"Card",props:{title:String,background_color:String,scr:String,url:String,html:String,index:Number,author:String,icon:String,date:String},emits:["display-html"],setup(e,{emit:t}){const n=e,s=t;function o(){s("display-html",{html:n.html,url:n.url})}return(i,r)=>{const l=Fr("v-icon");return be(),Ve("div",{class:"card",onClick:o},[te("div",oc,[te("div",ic,Ot(e.index)+" "+Ot(e.title),1),te("div",rc,[oe(l,{name:e.icon,scale:"4"},null,8,["name"])])]),te("div",lc,[te("div",null,Ot(e.date),1),te("div",cc,Ot(e.author),1)])])}}},ac=Cn(fc,[["__scopeId","data-v-09cf33f0"]]),uc={class:"card-container"},pc={__name:"CardGroup",setup(e){return(t,n)=>(be(),Ve("div",uc,[qo(t.$slots,"default",{},void 0)]))}},hc=Cn(pc,[["__scopeId","data-v-9af64a47"]]),dc={class:"article"},vc=["innerHTML"],gc={__name:"Article",props:{html:String},setup(e){return(t,n)=>(be(),Ve("div",dc,[qo(t.$slots,"default",{},void 0),te("div",{innerHTML:e.html},null,8,vc)]))}},mc=Cn(gc,[["__scopeId","data-v-0c86aa70"]]),bc=`<!doctype html>\r
<html>\r
<head>\r
<meta charset='UTF-8'><meta name='viewport' content='width=device-width initial-scale=1'>\r
<title></title></head>\r
<body><p>&nbsp;</p>\r
<h1>这里是沙乡之外，无边无际的荒野……</h1>\r
<p>回家吧。</p>\r
</body>\r
</html>`,_c=`<!doctype html>
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
</html>`,yc=`<!doctype html>
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
</html>`,wc=`<!doctype html>
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
</html>`,xc=`<!doctype html>
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
</html>`,Cc=`<!doctype html>
<html>
<head>
<meta charset='UTF-8'><meta name='viewport' content='width=device-width initial-scale=1'>
<title>等离子电视</title></head>
<body><h1>等离子电视</h1>
<h3>2024-08-25 - 等离子电视</h3>
<div>
    <center>
        <img src="/img/等离子电视.jpg" alt="等离子电视" style="zoom:30%">
        <br>
        <div style="color: #999;
    				padding: 2px;">
			【听说是画质的巅峰】
    	</div>
    </center>
</div>
<p>在相册里翻到这个。</p>
<p>（在某人家里，然后拍到了一个等离子电视。）</p>
</body>
</html>`,Sc=`<!doctype html>
<html>
<head>
<meta charset='UTF-8'><meta name='viewport' content='width=device-width initial-scale=1'>
<title>电影</title></head>
<body><h1>电影</h1>
<p>&nbsp;</p>
<h2>一 阿拉木图的早晨</h2>
<p>1月，夜晚在6点尚未消散，你从宿舍大厅窗外看到黑洞洞的天空，推开笨重的玻璃门走出去，外面是冷凉的早晨。前往食堂的路上大雪纷飞，看不见的雪花打在你的脸上。空气使发昏的头脑清醒起来，你在一阵北风中迈着大步走着。迎风向北走，再拐向西，前方亮着明黄的灯，光从深沉的黑暗中努力透出来。这座赭色的建筑是食堂。</p>
<p>6点25分，我走过相同的路来到食堂。暖白色的灯光照亮了东侧早餐区的木纹瓷砖地板、木纹桌和塑料椅子，西侧的另一半区域暗着。推开塑料挡风帘，我习惯地让目光落在门口偏左侧，往里数第二张桌，编号是121。那里，洛夫果然在。他不胖，走路却很笨重，说话也“笨重”，嗓音粗重，三句话里有两句的主语听不清，一句的谓语听不清，也许本来还有一句，完全没听出来。没人跟他聊天。能跟他聊天的人，我算一个，维新也算——但我很长时间没跟维新聊天了。平常洛夫都在吃鸡蛋面，今天也是。我也点了一碗鸡蛋面，在他对面坐下。</p>
<p>我在售餐机器漆黑光滑的面板上操作，告诉它我需要“面条”“煎蛋”。要多少，我的饭卡就刷多少钱。我记得上个学期的机器型号小一点，就摆在明亮的售餐窗口一边，尚不起眼。你透过窗口，能看到正在忙着用右手往大锅里加开水，一边用左手拧阀门，调大火力的食堂爷爷，还有熟练地在一张铁板上倒面糊糊，然后只用一只手敲开鸡蛋摊煎饼的食堂奶奶。他们会热情地问你想吃什么。我早上总是吃鸡蛋面，所以食堂奶奶经常是看到我进食堂就给我把面准备好了……而你面前，这座黑色机器集成了做饭和售卖功能，庞大的机箱已经深深嵌入墙体。你的手指划过光滑的玻璃面板，一碗热气腾腾的鸡蛋面就出现了。</p>
<p>吸面喝汤的间隙，我们不时抬头看向头顶的电影机器，那上面正播放一部动漫。门口陆续进来一些学生，点完早饭之后也找地方坐下看电影机器。吃饭的学生之间彼此很少有对话，就像看电影的观众之间从不说话一样。但我喜欢边吃边聊。</p>
<p>“我听说食堂奶奶退休了。是什么时候的事啊？”</p>
<p>“不清楚……”</p>
<p>“我很想把她煎鸡蛋饼的场景拍下来的。可惜了。”</p>
<p>“嗯……那个，你就是，有没有发现到，经历过旧时代的老年人，是不需要任务机器发布指令就可以完成任务的。”</p>
<p>“是这样。”我的目光依旧落在动漫电影上。机器生成娱乐产品的质量大都很高，因为它们集成了世界上所有的知识、思想和艺术表现形式。动漫名为《卡玛斯乱世纪》，内容大概是南方魔族的大陆发生工业革命，被人类教会镇压，魔族奋起反抗的故事。每一集都引人深思。洛夫埋头吃面，但其实他很在意作为第二季主角的一只猫耳娘——革命的领导者。他很喜欢社会、思想层面的知识。</p>
<p>“对于整个社会而言的，社会上的老年人其实最应该重视，他们是为数不多的，要我说的，就是能完整地做一个，啊，完整的人的，一个群体，呃……为数不多的，不愿意给机器做工作的。是的我，在这里强调一个‘给机器工作’，不是‘让机器帮忙做工作’……就是，你明白我的意思吗？那个？”</p>
<p>随后他自言自语着：“就是，我……跟他们说了好多次了，是……他们有人听吗？”</p>
<p>“反正以后是没有人在放假前一天早上，特地往你的鸡蛋面里再加一勺青椒肉丝，还不收钱了。”</p>
<p>“对的，就是这个意思。”洛夫总是在我意想不到的情况下同意我的话。其实他就是心里的话太多，结果到嘴上根本来不及说，而我能猜到他大概的意思。</p>
<p>这个世界最重要的就是电影机器。它们被用来生成电影——承载全人类思想、幻想的景观。娱乐电影有对节奏的精准把控，英雄和少女在丰富庞大的幻想世界中构造出一个个引人入胜的梦，恰到好处而不低级；学习电影能深入浅出地讲解所有的知识，因此也成为了学校的主要教学手段，学生只要有想学的知识就能随时找到；新闻电影极其详实地讲解事实真相，运用各种哲学思想对其进行不同角度地分析，那逻辑太过精妙……</p>
<p>6点30分，来食堂的学生越来越多，许多在我们座位附近坐下，却与我们保持着相当的距离。他们吃他们的饭，看他们的电影。他们的身影就像是背景贴图，陌生到让人不愿在上面分配注意力。而电影机器的屏幕仿佛有磁力一般，吸引着所有人的目光。电影屏幕上还有所谓“弹幕”的实时评论——那是机器根据影片中的“梗”和“槽点”自动生成的，你看着弹幕，就觉得不再孤单了。</p>
<p>终于，我从电影的幻梦中清醒过来，眼前是桌子、空碗、筷子和黑洞洞的窗，最后是洛夫的大脸。他没有什么表情，只是自己收拾着碗筷。准备交给回收机器。</p>
<p>又推开塑料挡风帘，寒风扑面。外面是依旧黑暗的天空。我们走在下雪的道路上，并排向西走去。</p>
<p>&nbsp;</p>
<p>“嘿，我感觉脑子里响起一阵熟悉的旋律……”我看着积雪的道路，把手揣进羽绒服外面套着的校服的口袋，弓起背，缩起脖子，模仿小混混的走路姿势。洛夫在旁边一步一个脚印地走着，一边把一把大大的伞慢慢撑起来。</p>
<p>“话说，你知道一部苏联电影吗？叫《阿拉木图小街》。”那个时代，人类还在自己拍电影。我从校服口袋里掏出一部本世纪初生产的数码相机，这是我爷爷给我的。他已经去世了。随着“滴滴”的开机音效，我把镜头对准看上去傻乎乎的洛夫。</p>
<p>“不知道。”洛夫想让伞遮在我头上，我闪开，向后退去：“就这个镜头，不错！——我记得，那部电影的主角是个小混混，开场是从黎明的街道上大步走来，结尾是在夜雪的街道上负伤离开……你走路就跟负了伤似的，一瘸一拐的。”</p>
<p>“呃……哈……就是，那部电影，它讲的什么？”</p>
<p>&nbsp;</p>
<p>“啊，我找到了这部电影的访谈，说里面的很多片段都是导演和演员商量了一下，即兴演的。这真就是一部‘cult片’！它里面用空洞的合成器的笛音表现寒冷……就没有任务机器告诉你第一步要做什么，然后第二步什么的。所以整部影片，你说它也就讲了一个小混混的复仇故事吧，好像也没有那么无聊。总之，你觉得这部电影是活的。”</p>
<p>“而现在的电影是死掉的。”</p>
<p>“嗯嗯！啊，任务机器下任务了。”我们从口袋里掏出一块黑色矩形片状面板，这就是任务机器。所有人都要接受它的安排。</p>
<p>&nbsp;</p>
<p>“因大雪，6点55的早读延迟到7点上……这又算什么呀？”我俩相视而笑。现在，夜晚的黑色褪去了一点，周围笼罩着一层静谧的蓝。“慢慢走！”</p>
<p>6点35分，你目送我和洛夫远去。你转身向宿舍楼走去。宿舍楼边上就是操场，操场是整体下沉的，四周是供人行走的道路，路边有漆过的铁栏杆隔断。你向右看去，就像站在一块盆地边缘的山路上望着盆地一样，望着操场。</p>
<p>去三号楼，一楼大厅的宿管站亮着刺眼的白炽灯，在纯白色瓷砖地板上反射出形状奇异的高光。走过漫长的走廊，右手边木纹金属制的门在左手边矩形的窗上映出虚像，与窗外东方发白的天空重叠在一起，随着你的前进，景物缓缓向后卷动——仿佛古老的胶卷在卷动，播放着非机器生成的电影……</p>
<p>&nbsp;</p>
<p>记得走楼梯，不要走电梯。上四楼，到401室，看看维新怎么样了。</p>
<p>维新从发烧的噩梦中醒来。他这一个星期正因为传染病，一个人在宿舍隔离。他明明是一个强壮健康的人。虽然比我矮一大截，上半身却全是肌肉，几乎是倒三角形的身材。肩膀不宽，却因为硕大的肌肉呈现出直角。他下床的时候，床架发出吱呀吱呀的声音。他穿上不带任何图案的白T恤，就像上世纪动作电影里的主角。</p>
<p>他昨晚应该看到我从门缝里塞给他的信了吧。我们吃饭时间不统一，所以我们日常通过书信联系。现在他应该打开了床下书桌上的台灯，带上一副黑框眼镜，开始在一张试卷的背面龙飞凤舞地写起来了吧。</p>
<p>“宇真兄，你的‘人應該創作自己的電影’這句話我喜歡。可惜我是個粗人沒什麼所謂靈感。但是如果有什麼我能幫忙的你確實可以找那個‘鐳鋅（維新）君’（哈）……比如你的Value要是扣完了，就把數學作業交給我寫吧。”维新喜欢写繁体字，之前他还专门找过百年前使用五笔编码向机器输入汉字的资料。但是他的字极其潦草，标点符号几乎看不清。因为他在信里把我称作“鎶鍆（哥们）”，所以我就反过来喊他“鐳鋅（維新）君”了。</p>
<p>我昨天熬到很晚才睡，当时我作业都没有写，所以会被任务机器扣“Value”。我写出一份《电影宣言》，内容大概是叫上洛夫维新两个人成立一个社团，一起拍人类自己的电影，顺便应付任务机器布置的“社会实践”作业。我写完感觉浑身舒坦，一觉醒来还是很精神。</p>
<p>&nbsp;</p>
<p>我知道他只在T恤上披一件灰风衣，就下楼向着白茫茫的天地大步走去，像极了阿拉木图的小混混。</p>
<h2>二 奈良的快递</h2>
<p>我是从什么时候开始想拍一部人类自己的电影的？你一定带着这样的疑惑问我了。</p>
<p>那是12月一个正午，寒风吹得天空蔚蓝，不带一丝云彩，刺目的太阳光线仿佛丝毫未经大气削弱。所有物体在阳光下的一面都是温暖的，在阴影下的一面则冰凉刺骨。</p>
<p>东边的食堂与西边的教学楼，中间有一座全封闭的天桥，学生无论烈日雨雪都走在天桥里面。三者正好构成一座大门的形状，北大门就处在天桥的阴影之下，往外走几步就是被阳光晒得发烫的路面。你看到我站在那阴影下，往外张望几下，又扭头望着天桥下角落里的监控机器，然后转身退回来，两只手插在兜里，低下头，在明暗交界线上走来走去。</p>
<p>突然维新出现了，他住在我隔壁宿舍，所以我认识他。</p>
<p>“嘿，你在干嘛？”</p>
<p>“呃，是这样的，我有个快递要取，这个快递不在任务之内，所以机器没给你分配时间。但是我又没看见快递机器有我快递的信息……话说你在这里干什么？”</p>
<p>“我？”他哼了一声，“我就是不喜欢走在天桥里面，太冷，容易感冒。”</p>
<p>“啊？你不怕扣Value？”</p>
<p>“我数学的Value多到扣不光！哈哈！”他突然大笑起来。</p>
<p>“好吧……所以我现在怎么办？”</p>
<p>“那个，你从哪里联系到店家的。不是，你快递是什么？”</p>
<p>“……一本书。说起来……”我突然也得意起来，“你知道我从哪里买的吗？试卷上！就是星期一晚上的语文阅读题，里面居然介绍了一个书店。我记得那篇文章是‘总-分-总’结构，分的部分是介绍这家书店的各种书籍。可是你知道吗？我就按照跟机器学的，要注意文章出处嘛，然后我发现——”</p>
<p>“发现什么？”他也望着我笑。我那时肯定也在笑。</p>
<p>&nbsp;</p>
<p>“电话号码！那文章末尾标出处的地方标了个电话号码！”</p>
<p>“哈！哈！哈！”他大笑起来，“我做完就忘了！”我们一起笑，也不管什么监控机器了。Value扣就扣吧！</p>
<p>“你电话卡呢？”他问。</p>
<p>“在宿舍！”</p>
<p>“走！我跟你一起去！”</p>
<p>于是我们就走出天桥的阴影，并排走在洒满阳光的大路上。</p>
<p>&nbsp;</p>
<p>任务机器上明明有列表，今天要上什么课，写什么作业，几点去锻炼，几点去睡觉。你看，“待办”条目上明明写着，下一件要做的事是“回教室做午间练”。可是，我很兴奋，我知道自己内心有一个更加想完成的“任务列表”——你心里也有“自己的”任务列表吗？这个列表不像机器给出的列表，要依据任务完成的情况给你赋上一个“Value”，将来作为统计数据纳入评分体系，并根据你的表现给你下一个任务。据说机器会使任务都符合你的“心流”，好让你不停地做任务，不停地……</p>
<p>“那本书是关于什么的？”</p>
<p>“呃，书名是《电影中的奈良》。我们历史课不是学的扬州高僧鉴真东渡日本吗，最后他不是到的奈良吗？”</p>
<p>“对，奈良还有唐招提寺。”</p>
<p>&nbsp;</p>
<p>“所以一看到奈良我就想到扬州。我作为扬州人，感觉就很亲切。这是第一点。”</p>
<p>&nbsp;</p>
<p>“嗯。”</p>
<p>“然后第二点，阅读理解里提到，这本书记录了奈良在电影里的各种面貌。有一部电影，你知道叫什么名字吗？”</p>
<p>“嗯？”</p>
<p>“《西渡》！六十年代的片子。问题是我们现在没有看这种电影的条件，所以我就想把这本书找过来……就是那种，特别想知道一篇故事里讲的什么的感觉。”</p>
<p>&nbsp;</p>
<p>“我理解，我理解。”</p>
<p>我们来到操场边的道路上，铁栏杆的阴影与明亮的路面形成强烈的对比。这种明暗相间的光影特别美，</p>
<p>我们走到楼梯口，我问：“走楼梯？”</p>
<p>“当然。锻炼身体嘛。”</p>
<p>&nbsp;</p>
<p>“我只是觉得自己不想看电梯里的电影。”</p>
<p>我们走在楼梯上，脚步声在楼道里回响。</p>
<p>&nbsp;</p>
<p>“为什么？”维新问。</p>
<p>“是这样，我就是觉得这些机器电影特别……迎合人的口味……我不喜欢这种不现实的感觉。”</p>
<p>我突然激动起来，继续说：“有一次学校组织看一部讲共产主义终于实现的故事的电影——你应该也看了吧？”我刻意放慢了上楼梯的脚步。维新也默契地慢了下来，仔细聆听着。</p>
<p>“当时我们看得心潮澎湃……好像跟里面的主角一样，经过旷日持久的斗争，终于取得胜利了。可是，电影散场，我们呢，继续做机器给的任务！”</p>
<p>维新没有说话，他把手插进风衣兜里，抬头长吁一口气。你又怎么想呢？</p>
<p>我们来到四楼，窗外就是望不尽的大楼、无限延展的道路和校门口永远在闪烁的“慢”字黄灯。</p>
<p>拿到电话卡，下楼，我们迎面遇到了洛夫。现在可是午自习时间，你跑过来干什么？</p>
<p>“呃，我……是跟着你们过来了，的。”</p>
<p>“好好好！”维新大笑。</p>
<p>“当然好，就是不听机器指挥呗？”</p>
<p>走，去打电话！做任务有取快递重要吗？何况我们要收取的是一个来自奈良的故事，一个来自人类，而不是机器的故事。这比完成机器设计的符合“心流”模型的任务要令人兴奋得多。于是你看到三个人，在铺着石砖的路面上迎着太阳走，身后落下长长的阴影，一个是数学哲学家，一个是电影艺术家，一个是沉默思想家。我怎么会看到“身后落下长长阴影”呢？我没有能向后看的眼睛，而且现在是正午，影子也不会很长。也许，这是未来的某一部电影的镜头？</p>
<p>到了，路边的电话亭。我插上卡，漆黑的屏幕亮起绿色的像素字。</p>
<p>“喂，喂……喂？”</p>
<p>电话没打通。快递怎么说？我们三个人互相看看，感觉有点尴尬。</p>
<p>“所以，《西渡》會講什麽？”</p>
<p>“……不管了！鉴真东渡送去真经，那西渡的应该是来还佛经的！话说，为什么呢？”</p>
<p>“我，觉得那个，可能书店的老板是老年人，在家里去世了。”</p>
<p>洛夫这样说，我们又都沉默了。这样的事情是有过的。一个老年人，在家里看电影看得好好的，人没了。</p>
<p>“也许，老板是把真经送到西天了。阿弥陀佛。”</p>
<h2>三 上海的台风</h2>
<p>6月，盛夏，过于明亮的太阳晒得人眼前发黑。去年冬天，我的Value被扣去不少，很大程度是我经常跑到图书馆的原因。图书馆对外宣称是每天都有开放时间的，但我们从来没有一个机器任务是分配给“到图书馆看书的”。</p>
<p>图书馆里有不少语文阅读理解，机器特别分出了“电影”专题，可能是哪一年重点要考的。我了解了不少电影的资料。我并没有系统去看，在任务的间隙中，你的前方永远有待办事项，心是静不下来的。我只是在集中地寻找当时我脑中的“迎面大步走向阳光，身后是长长的阴影”的景象。《阿拉木图小街》中黑皮夹克的小混混，被捅了一刀，还淡定地抽烟，两手插兜，走在雪夜里；《石家庄的夏洛克》，四个华北平原的老头，一副又老又酷的样子，其中一个的手里甩着公交卡，并排走在拆迁楼的废墟里……以后还会有“数学哲学家”“电影艺术家”“沉默思想者”并排走在操场边缘，面前迎着太阳，身后拖着阴影，在寒风中前进，这样的镜头。</p>
<p>我尝试过用数码相机拍摄一些镜头，但效果都不太理想，同时，因为快要高考了，任务越来越繁重，我只觉得当时“吹着寒风，迎着阳光”的感觉越发模糊了。洛夫吃饭的时间被调整了。我和维新之间也很少有时间写信了。</p>
<p>一天晚上，新闻电影里播送了台风预警。台风将在上海登陆，到时候我们扬州也会刮风下雨吧。果不其然，晚自习下的时候，好多同学都撑起伞了。我没带伞，直接走出去，却发现只有一点毛毛雨，洒在脸上还挺凉快。</p>
<p>不知道是天气转凉了还是怎么了，我那天晚上一个人在宿舍里写作业，心总是静不下来，很晚才睡。半夜两点，窗外狂风大作，电闪雷鸣，窗子被吹的咚咚响。我提着台灯，拿着相机到窗口，打开窗子，随手拍了一张窗帘被风吹起的照片。听说这风有十四级呢，怎么不吹得再大一点呢？吹断这些电线，吹走头顶的天桥啊？</p>
<p>唉，脑子里尽想这些，明天语文早读要背诵古文，我怕不是背着背着就睡着了。</p>
<p>迷迷糊糊醒过来……刷牙、洗脸，去吃早饭……</p>
<p>来到食堂，我觉得气氛不太对劲，许多学生聚在这里，互相交流着什么，平时静悄悄的食堂今天格外热闹，应该是出了什么事。我一眼就在人群中认出了洛夫和维新。</p>
<p>“今天怎么了？” </p>
<p>“任务机器好像坏掉了，同学们一个早上都没接到任务通知。现在大家在讨论应该做什么。——哦，电影机器也坏了。”维新简单说明了情况。</p>
<p>“那个，应该是跟，那个昨天晚上的台风有关系的……”洛夫一语道出了事实真相，停顿一会儿，他突然把头抬起来，流利地说出了下面一段话：</p>
<p>“现在的情况就是，没有机器告诉你应该做什么，做不好就扣你的Value了；也没有机器生成的电影可以看了。现在，是你自己，要给你自己下任务；你自己的Value也由你自己赋予；你自己要看什么电影，就要自己去拍。现在的情况就是这样……”</p>
<p>我知道，洛夫这是把他一直想说的话说出来了。</p>
<p>“走，我们去拍电影。”我心里的任务列表自然而然地出现了。</p>
<p>“好好好！”维新也什么都明白了，“那个，你不是要拍一段三个人并排走在阳光下，后面阴影拉得特别长的一个镜头吗？我知道有个地方可以……真的，真太帅了！”</p>
<p>从食堂出门右拐向西，再向北。你要是站在校门口，就能看见三个人，一个大踏步，一个两手插兜，一个一步一拐，就这样走了出来。</p>
<p>“你说的那个地方是哪里？”</p>
<p>“上海，从电台里听到的，那里现在在台风风眼里。”</p>
<p>“电台？”</p>
<p>“对，一种旧时代的机器，人们想用就用，没有就关掉。跟你的数码相机是一种类型的机器。”</p>
<p>“就是，为人工作的机器。”洛夫恢复了“笨重”的说话语气。</p>
<p>“怎么去呢？”</p>
<p>“笨哪！你不是学地理的吗？上海就在扬州东边，我们只要沿着长江往东走就能到，长江不就在扬州南边吗？京杭大运河不是通到长江吗？我们向东不就到大运河了吗？”</p>
<p>“啊对对对，问题是这中间有几百公里远啊？”</p>
<p>“锻炼身体嘛……”</p>
<p>“那个，交通线基本都在用机器，所以呢，现在的……最快交通工具，是那个摩托车，的说……”</p>
<p>“嗯，那我们在路上就可以拍一部公路电影了……”</p>
<p>“好啊！那种农用三轮摩托车！我对汽油发动机原理简直太了解了！”</p>
<p>你不久就会看到这样的景象的：阳光照耀的大运河边，两旁都是金色麦田的公路上，一辆红褐色的农用三轮摩托车会逆风向南轰鸣而过，上面载着最普通的三个高中学生，他们个个都是自己电影的主角。</p>
<p>&nbsp;</p>
</body>
</html>`,Tc=`<!doctype html>
<html>
<head>
<meta charset='UTF-8'><meta name='viewport' content='width=device-width initial-scale=1'>
<title>梅德塞大陆全图（半完成稿）</title></head>
<body><h1>梅德塞大陆全图（半完成稿）</h1>
<blockquote><p>这是为朋友的架空世界画的地图。</p>
</blockquote>
<p><img src="./img/卡玛斯所在大陆（半完成稿）.jpeg" referrerpolicy="no-referrer" alt="卡玛斯所在大陆（半完成稿）"></p>
</body>
</html>`;var un={home:[{title:"故事",icon:"gi-spell-book",url:"story"},{title:"相册",icon:"gi-photo-camera",url:"photo"},{title:"笔记",icon:"gi-notebook",url:"note"}],story:[{title:"异世界同学",html:_c,author:"by 匿名",icon:"gi-spell-book",date:"24-10-24"},{title:"世界的子夜",html:yc,author:"by WE",icon:"gi-spell-book",date:"24-10-24"}],photo:[{title:"消逝在江北的少女",html:wc,author:"by WE",icon:"gi-photo-camera",date:"24-10-25"},{title:"等离子电视",html:Cc,author:"by WE",icon:"gi-photo-camera",date:"25-03-06"}],note:[{title:"RTL2832U+R820T2的使用方法",html:xc,author:"by WE",icon:"gi-notebook",date:"24-11-21"}]};un.story.push({title:"电影",html:Sc,author:"by WE",icon:"gi-spell-book",date:"2025-03-06"});un.photo.push({title:"梅德塞大陆全图（半完成稿）",html:Tc,author:"by WE",icon:"gi-photo-camera",date:"2025-03-06"});const Ec={style:{height:"2rem",display:"flex","background-color":"#0063B1"}},Ac={key:0,style:{display:"flex","justify-content":"center"}},Oc={key:0},Mc={__name:"App",setup(e){const t=dt(!0),n=dt(!1),s=dt(!1),o=dt(bc);var i=dt([{title:"故事",icon:"gi-spell-book",url:"story"},{title:"相册",icon:"gi-photo-camera",url:"photo"},{title:"笔记",icon:"gi-notebook",url:"note"}]);function r(f){console.log("更新页面",f),f.html==null&&f.url!=null?(console.log("页面地址：",f.url),t.value=!1,s.value=!0,setTimeout(()=>{i.value=un[f.url],t.value=!0},500)):f.html!=null&&f.url==null?(n.value=!0,t.value=!1,o.value=f.html):console.log("更新页面失败")}function l(){console.log("返回主页"),t.value=!1,n.value=!1,setTimeout(()=>{i.value=un.home,t.value=!0,s.value=!1},500)}return(f,p)=>(be(),Ve(ve,null,[p[2]||(p[2]=te("header",{class:"container"},[te("div",{class:"content"},[te("div",{style:{display:"flex","flex-direction":"column",color:"white"}},[te("h1",{style:{"margin-bottom":"1rem","font-weight":"bold"}},"欢迎来到沙乡卫星广播站！"),te("p",null,"你好，我是世界无边（WE，World Endless）。"),te("p",null,"我打算在这里放一些现实中放不下的笔记、与一些人的讨论和一些资料。"),te("p",null,"如果大家在互联网上漫游到这里了，就进来坐坐吧。")])])],-1)),te("div",Ec,[n.value?(be(),Ve("div",{key:0,onClick:p[0]||(p[0]=u=>{n.value=!1,t.value=!0}),style:{margin:"0.25rem 1rem",color:"white"}},"返回")):Et("",!0),s.value?(be(),Ve("div",{key:1,onClick:l,style:{margin:"0.25rem 1rem",color:"white"}},"主页")):Et("",!0)]),te("main",null,[oe(ks,{name:"slide"},{default:Qt(()=>[t.value?(be(),zt(hc,{key:0},{default:Qt(()=>[(be(!0),Ve(ve,null,Nr(Mo(i),(u,h)=>(be(),zt(ac,{key:h,title:u.title,html:u.html,url:u.url,author:u.author,index:h+1,icon:u.icon,date:u.date,onDisplayHtml:r},null,8,["title","html","url","author","index","icon","date"]))),128))]),_:1})):Et("",!0)]),_:1}),oe(ks,{name:"bubble"},{default:Qt(()=>[n.value?(be(),Ve("div",Ac,[oe(mc,{html:o.value},null,8,["html"])])):Et("",!0)]),_:1})]),n.value?(be(),Ve("footer",Oc,p[1]||(p[1]=[te("p",null,"© 2024-2025 世界无边 All rights reserved.",-1)]))):Et("",!0)],64))}},Ic=Cn(Mc,[["__scopeId","data-v-ae4e4a40"]]),Rc={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;","&":"&amp;"};let Fc=0;var Pc=e=>e.replace(/[<>"&]/g,t=>Rc[t]||t),Lc=e=>e+Fc++;const ft={},Nc=e=>{const{name:t,paths:n=[],d:s,polygons:o=[],points:i}=e;s&&n.push({d:s}),i&&o.push({points:i}),ft[t]=Object.assign({},e,{paths:n,polygons:o}),ft[t].minX||(ft[t].minX=0),ft[t].minY||(ft[t].minY=0)},$c=(...e)=>{for(const t of e)Nc(t)},Hc=wr({name:"OhVueIcon",props:{name:{type:String,validator:e=>!e||e in ft||(console.warn(`Invalid prop: prop "name" is referring to an unregistered icon "${e}".
Please make sure you have imported this icon before using it.`),!1)},title:String,fill:String,scale:{type:[Number,String],default:1},animation:{validator:e=>["spin","spin-pulse","wrench","ring","pulse","flash","float"].includes(e)},hover:Boolean,flip:{validator:e=>["horizontal","vertical","both"].includes(e)},speed:{validator:e=>e==="fast"||e==="slow"},label:String,inverse:Boolean},setup(e){const t=dt([]),n=Ht({outerScale:1.2,x:null,y:null}),s=Ht({width:0,height:0}),o=Me(()=>{const O=Number(e.scale);return isNaN(O)||O<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.'),n.outerScale):O*n.outerScale}),i=Me(()=>({"ov-icon":!0,"ov-inverse":e.inverse,"ov-flip-horizontal":e.flip==="horizontal","ov-flip-vertical":e.flip==="vertical","ov-flip-both":e.flip==="both","ov-spin":e.animation==="spin","ov-spin-pulse":e.animation==="spin-pulse","ov-wrench":e.animation==="wrench","ov-ring":e.animation==="ring","ov-pulse":e.animation==="pulse","ov-flash":e.animation==="flash","ov-float":e.animation==="float","ov-hover":e.hover,"ov-fast":e.speed==="fast","ov-slow":e.speed==="slow"})),r=Me(()=>e.name?ft[e.name]:null),l=Me(()=>r.value?`${r.value.minX} ${r.value.minY} ${r.value.width} ${r.value.height}`:`0 0 ${p.value} ${u.value}`),f=Me(()=>{if(!r.value)return 1;const{width:O,height:$}=r.value;return Math.max(O,$)/16}),p=Me(()=>s.width||r.value&&r.value.width/f.value*o.value||0),u=Me(()=>s.height||r.value&&r.value.height/f.value*o.value||0),h=Me(()=>o.value!==1&&{fontSize:o.value+"em"}),_=Me(()=>{if(!r.value||!r.value.raw)return null;const O={};let $=r.value.raw;return $=$.replace(/\s(?:xml:)?id=(["']?)([^"')\s]+)\1/g,(P,j,V)=>{const E=Lc("vat-");return O[V]=E,` id="${E}"`}),$=$.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,(P,j,V,E)=>{const z=j||E;return z&&O[z]?`#${O[z]}`:P}),$}),x=Me(()=>r.value&&r.value.attr?r.value.attr:{}),R=()=>{if(!e.name&&e.name!==null&&t.value.length===0)return void console.warn('Invalid prop: prop "name" is required.');if(r.value)return;let O=0,$=0;t.value.forEach(P=>{P.outerScale=o.value,O=Math.max(O,P.width),$=Math.max($,P.height)}),s.width=O,s.height=$,t.value.forEach(P=>{P.x=(O-P.width)/2,P.y=($-P.height)/2})};return ps(()=>{R()}),Uo(()=>{R()}),{...rr(n),children:t,icon:r,klass:i,style:h,width:p,height:u,box:l,attribs:x,raw:_}},created(){const e=this.$parent;e&&e.children&&e.children.push(this)},render(){const e=Object.assign({role:this.$attrs.role||(this.label||this.title?"img":null),"aria-label":this.label||null,"aria-hidden":!(this.label||this.title),width:this.width,height:this.height,viewBox:this.box},this.attribs);this.attribs.stroke?e.stroke=this.fill?this.fill:"currentColor":e.fill=this.fill?this.fill:"currentColor",this.x&&(e.x=this.x.toString()),this.y&&(e.y=this.y.toString());let t={class:this.klass,style:this.style};if(t=Object.assign(t,e),this.raw){const o=this.title?`<title>${Pc(this.title)}</title>${this.raw}`:this.raw;t.innerHTML=o}const n=this.title?[nn("title",this.title)]:[],s=(o,i,r)=>nn(o,{...i,key:`${o}-${r}`});return nn("svg",t,this.raw?void 0:n.concat([this.$slots.default?this.$slots.default():this.icon?[...this.icon.paths.map((o,i)=>s("path",o,i)),...this.icon.polygons.map((o,i)=>s("polygon",o,i))]:[]]))}});function ms(e,t){t===void 0&&(t={});var n=t.insertAt;if(e&&typeof document<"u"){var s=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",n==="top"&&s.firstChild?s.insertBefore(o,s.firstChild):s.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}ms(`.ov-icon {
  display: inline-block;
  overflow: visible;
  vertical-align: -0.2em;
}
`);ms(`/* ---------------- spin ---------------- */
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
`);ms(`.ov-flip-horizontal {
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
`);const Dc={name:"co-file",minX:-51.2,minY:-51.2,width:614.4,height:614.4,raw:'<path fill="var(--ci-primary-color, currentColor)" d="M334.627 16H48v480h424V153.373zM440 166.627V168H320V48h1.373zM80 464V48h208v152h152v264z" class="ci-primary"/>'},jc={name:"gi-notebook",minX:-35.84,minY:-35.84,width:583.68,height:583.68,raw:'<path d="M131.3 20.35c-14.6.1-28.1 10-31.93 24.82-2.33 9.13-.55 18.4 4.13 25.84-7.67 4.26-13.69 11.53-16.03 20.66-2.32 9.13-.56 18.33 4.1 25.83a32.687 32.687 0 00-15.96 20.6c-2.34 9.1-.54 18.4 4.18 25.8-7.72 4.3-13.75 11.5-16.09 20.7-2.33 9.1-.54 18.4 4.19 25.8-7.72 4.3-13.75 11.5-16.09 20.7-2.34 9.1-.54 18.4 4.18 25.8-7.72 4.3-13.75 11.5-16.08 20.7-2.34 9.1-.54 18.4 4.18 25.8-7.72 4.3-13.75 11.5-16.09 20.7-2.35 9.2-.51 18.5 4.3 26a32.915 32.915 0 00-16.28 20.8c-4.48 17.5 6.25 35.6 23.79 40.1l.1-.2 31.71 8.2-1.47 5.7 261.56 67L374 326.5l-22.4 21.2-87.8 26.5 15.5-42.5-151.7-38.8 4.4-17.4 153.5 39.3 9.7-26.7 15.3-14.4-167-42.8 4.4-17.4 178 45.6 39.6-37.4-206.1-52.8 4.4-17.4L380.7 207l-.1.4 31.5-29.8 18.3-71.4-261.6-67.04-4.8 18.66c2.2-16.32-8.1-32.27-24.5-36.44-2.7-.7-5.5-1.04-8.2-1.03zm.3 17.99c1.2 0 2.4.19 3.5.48 8.1 2.09 12.9 10.13 10.8 18.27l17.2 4.4-11 42.81c2.2-16.35-8.2-32.26-24.5-36.43l-.6-.15c-7.8-2.34-12.2-10.15-10.2-18.07 1.7-6.61 7.3-11 13.7-11.3h1.1zm-11.9 46.51c.9 0 1.9.14 2.9.36l.6.15c8.1 2.08 12.9 10.12 10.8 18.24l17.2 4.4-11 43c2.4-16.4-8-32.6-24.4-36.7-.7-.2-1.3-.4-1.9-.5-7-2.7-10.9-10.1-9-17.62 1.7-6.97 7.9-11.45 14.8-11.29zm59.9 4.59l217 55.66-4.4 17.4-217-55.6zm-72.9 41.86h1.3c.5 0 .9 0 1.4.1.6.2 1.2.3 1.8.5l.1-.2c8.1 2.1 12.9 10.1 10.8 18.3l17.2 4.4-11 43c2.3-16.3-8.1-32.4-24.4-36.6-8.18-2.1-12.94-10.1-10.85-18.3 1.69-6.6 7.25-10.9 13.65-11.2zM465.4 152l-10.2 9.6 31.6 33.5 10.2-9.6zm-23.3 22L315.7 293.5l31.5 33.5 126.5-119.5zm-347.23 3.7c1.48 0 3 .1 4.53.5 8.1 2.1 12.9 10.1 10.8 18.3l17.2 4.4-11 43c2.3-16.4-8.1-32.4-24.44-36.6-8.14-2.1-12.9-10.1-10.82-18.3 1.7-6.6 7.32-11 13.73-11.3zm-11.91 46.5c1.48 0 3 .1 4.53.5 8.14 2.1 12.91 10.1 10.81 18.3l17.2 4.4-11 42.9c2.3-16.3-8.1-32.3-24.45-36.5-8.14-2.1-12.89-10.1-10.81-18.3 1.69-6.6 7.31-11 13.72-11.3zm-11.9 46.5c1.48 0 3 .1 4.53.5 8.13 2.1 12.89 10.1 10.81 18.3l17.2 4.3-10.94 42.8c2.16-16.3-8.25-32.1-24.51-36.3-8.14-2.1-12.9-10.1-10.82-18.3 1.7-6.6 7.32-11 13.73-11.3zm235.34 39.2L293 346.6l37.4-11.3zm-247.25 7.3c1.48 0 3 .1 4.53.5 8.14 2.1 12.9 10.1 10.81 18.3l17.21 4.3-11 43c2.1-16.2-8.3-32-24.53-36.2l.1-.3c-8.16-2.1-12.92-10.1-10.84-18.3 1.69-6.6 7.31-11 13.72-11.3zm56.95 20.3L333.2 393l-4.4 17.4-217.1-55.5zM47.18 364c1.48 0 3 .1 4.52.5 8.14 2.1 12.9 10.1 10.82 18.3l17.2 4.3-3.69 14.4-31.92-8.2v.2c-8.01-2.2-12.67-10.1-10.61-18.2 1.7-6.6 7.32-11 13.73-11.3z"/>'},Vc={name:"gi-photo-camera",minX:-35.84,minY:-35.84,width:583.68,height:583.68,raw:'<path d="M41 122.496v14h62v-14zm154.73 0l-32 32H137v46h30.682C192.4 159.898 237.08 132.738 288 132.738s95.6 27.16 120.318 67.758H487v-46h-74.73l-32-32c-92.27-9-92.27-9-184.54 0zM288 150.738c-67.903 0-122.758 54.855-122.758 122.758 0 67.903 54.855 122.758 122.758 122.758 67.903 0 122.758-54.855 122.758-122.758 0-67.903-54.855-122.758-122.758-122.758zm-263 3.758v46h94v-46zm263 14.713c57.49 0 104.287 46.796 104.287 104.286S345.49 377.783 288 377.783c-57.49 0-104.287-46.797-104.287-104.287 0-57.49 46.797-104.287 104.287-104.287zm-21.787 22.042c-12.173.42-25.717 6.526-36.78 16.578-20.025 18.19-26.342 43.853-14.11 57.318 12.232 13.465 38.38 9.634 58.406-8.558 20.023-18.192 26.34-43.855 14.108-57.32-5-5.504-12.62-8.33-21.625-8.018zM25 218.496v142h94v-142zm112 0v142h40.412c-18.888-23.96-30.17-54.183-30.17-87 0-19.507 3.988-38.096 11.188-55zm280.57 0c7.2 16.904 11.188 35.493 11.188 55 0 32.817-11.282 63.04-30.17 87H487v-142zM25 378.496v14h94v-14zm112 0v14h75.89a141.492 141.492 0 01-18.536-14zm244.646 0a141.616 141.616 0 01-18.535 14H487v-14z"/>'},zc={name:"gi-spell-book",minX:-35.84,minY:-35.84,width:583.68,height:583.68,raw:'<path d="M319.61 20.654c13.145 33.114 13.144 33.115-5.46 63.5 33.114-13.145 33.116-13.146 63.5 5.457-13.145-33.114-13.146-33.113 5.457-63.498-33.114 13.146-33.113 13.145-63.498-5.459zM113.024 38.021c-11.808 21.04-11.808 21.04-35.724 24.217 21.04 11.809 21.04 11.808 24.217 35.725 11.808-21.04 11.808-21.04 35.724-24.217-21.04-11.808-21.04-11.808-24.217-35.725zm76.55 56.184c-.952 50.588-.95 50.588-41.991 80.18 50.587.95 50.588.95 80.18 41.99.95-50.588.95-50.588 41.99-80.18-50.588-.95-50.588-.95-80.18-41.99zm191.177 55.885c-.046 24.127-.048 24.125-19.377 38.564 24.127.047 24.127.046 38.566 19.375.047-24.126.046-24.125 19.375-38.564-24.126-.047-24.125-.046-38.564-19.375zm-184.086 83.88a96.38 96.38 0 00-3.492.134c-18.591 1.064-41.868 8.416-77.445 22.556L76.012 433.582c78.487-20.734 132.97-21.909 170.99-4.615V247.71c-18.076-8.813-31.79-13.399-46.707-13.737a91.166 91.166 0 00-3.629-.002zm122.686 11.42a209.3 209.3 0 00-8.514.098c-12.81.417-27.638 2.215-45.84 4.522v177.135c43.565-7.825 106.85-4.2 171.244 7.566l-39.78-177.197c-35.904-8.37-56.589-11.91-77.11-12.123zm2.289 16.95c18.889.204 36.852 2.768 53.707 5.02l4.437 16.523c-23.78-3.75-65.966-4.906-92.467-.98l-.636-17.805c11.959-2.154 23.625-2.88 34.959-2.758zm-250.483 4.658L60.54 313.002h24.094l10.326-46.004H71.158zm345.881 0l39.742 177.031 2.239 9.973 22.591-.152-40.855-186.852h-23.717zm-78.857 57.82c16.993.026 33.67.791 49.146 2.223l3.524 17.174c-32.645-3.08-72.58-2.889-102.995 0l-.709-17.174c16.733-1.533 34.04-2.248 51.034-2.223zm-281.793 6.18l-6.924 30.004h24.394l6.735-30.004H56.389zm274.418 27.244c4.656.021 9.487.085 14.716.203l2.555 17.498c-19.97-.471-47.115.56-59.728 1.05l-.7-17.985c16.803-.493 29.189-.828 43.157-.766zm41.476.447c8.268.042 16.697.334 24.121.069l2.58 17.74c-8.653-.312-24.87-.83-32.064-.502l-2.807-17.234a257.25 257.25 0 018.17-.073zm-326.97 20.309l-17.985 77.928 25.035-.17 17.455-77.758H45.313zm303.164 11.848c19.608-.01 38.66.774 56.449 2.572l2.996 20.787c-34.305-4.244-85.755-7.697-119.1-3.244l-.14-17.922c20.02-1.379 40.186-2.183 59.795-2.193zm-166.606 44.05c-30.112.09-67.916 6.25-115.408 19.76l-7.22 2.053 187.759-1.27v-6.347c-16.236-9.206-37.42-14.278-65.13-14.196zm134.41 6.174c-19.63.067-37.112 1.439-51.283 4.182v10.064l177.594-1.203c-44.322-8.634-89.137-13.17-126.31-13.043zM26 475v18h460v-18H26z"/>'};$c(Dc,Vc,zc,jc);const bi=tc(Ic);bi.component("v-icon",Hc);bi.mount("#app");
