var a=Object.defineProperty;var o=(e,r,t)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;var i=(e,r,t)=>(o(e,typeof r!="symbol"?r+"":r,t),t);class s extends Error{constructor(t){super(t);i(this,"name","RingoError")}}function f(e,r,t){let n=`${r}D${e}`;return t>0&&(n+=` + ${t}`),n}function l(e){if(e.length===0)throw new s("A string est\xE1 vazia.");return e.replace(e[0],e[0].toUpperCase())}function p(e,r=!1){if(e.length===0)throw new s("A lista est\xE1 vazia.");const t=e.join(", ").replace(/,\s([^,]+)$/," e $1");return r===!0?l(t):t}async function u(){const r=await(await fetch("/ringo/api/ability.json")).json();if(!Array.isArray(r))throw new s("N\xE3o foi poss\xEDvel obter informa\xE7\xF5es sobre as habilidades.");const t=new Map;return r.forEach(n=>t.set(n.sigla,n)),t}export{s as R,u as f,f as g,p as j};
