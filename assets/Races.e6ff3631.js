import{_ as v,d as S,u as b,x as E,y,o as c,c as i,b as o,k as B,z as A,a as l,F,l as V,e as d,w as u,f as w,A as I,p as R,g as M,m as h,t as N,r as x}from"./index.75ff0e4f.js";import{u as D}from"./game.d2a096cb.js";import{S as p}from"./StandardButton.b836dc48.js";const L={};function U(r,m){return null}const $=v(L,[["render",U]]),_=r=>(R("data-v-62156652"),r=r(),M(),r),q=_(()=>o("p",{class:"text-line"},"Escolha uma ra\xE7a para seu personagem. Ela definir\xE1 sua apar\xEAncia geral e seus talentos naturais.",-1)),z=_(()=>o("p",{class:"text-line small"},[h("Se ficar em d\xFAvida, apenas clique em "),o("span",{class:"bold"},"Continuar"),h(".")],-1)),G=_(()=>o("p",{class:"text-line small"},"Uma ra\xE7a aleat\xF3ria ser\xE1 escolhida para voc\xEA!",-1)),T={class:"races-area"},j=["value"],H={class:"button-area"},J=S({__name:"Races",setup(r){const m=b(),{character:t}=m,k=D(),{races:g}=k,e=E([]);t.books.forEach(s=>{const a=g.get(s);a&&e.push(...a.entries())}),e.length>0&&e.sort((s,a)=>s[1].localeCompare(a[1],"pt-br"));function f(){const s=Math.floor(Math.random()*e.length);t.race=e[s][0]}function C(){t.race===null&&f(),x.push({name:"create-char-step-3"})}return y(()=>{e.some(s=>t.race===s[0])||(t.race=null)}),(s,a)=>(c(),i("section",null,[q,z,G,o("div",T,[B(o("select",{"onUpdate:modelValue":a[0]||(a[0]=n=>l(t).race=n)},[(c(!0),i(F,null,V(e,n=>(c(),i("option",{key:n[0],value:n[0]},N(n[1]),9,j))),128))],512),[[A,l(t).race,void 0,{number:!0}]])]),o("div",H,[d(p,{text:"Continuar",disabled:e.length<1,onClick:u(C,["prevent"])},null,8,["disabled","onClick"]),d(p,{text:"Aleat\xF3rio",disabled:e.length<1,onClick:u(f,["prevent"])},null,8,["disabled","onClick"]),d(p,{text:"Voltar",onClick:a[1]||(a[1]=u(n=>l(x).push({name:"create-char-step-1"}),["prevent"]))})]),typeof l(t).race=="number"?(c(),w($,{key:0})):I("",!0)]))}});const Q=v(J,[["__scopeId","data-v-62156652"]]);export{Q as default};
