var B=Object.defineProperty;var A=(o,a,r)=>a in o?B(o,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[a]=r;var x=(o,a,r)=>(A(o,typeof a!="symbol"?a+"":a,r),r);import{d as D,u as M,h as b,D as V,G as F,I as N,o as d,c as u,b as l,l as T,J as L,F as C,m as y,e as f,w as _,a as p,j as R,A as q,T as z,p as I,g as $,q as g,t as E,r as j,_ as G}from"./index.0c540d12.js";import{d as H}from"./game.6cfac83a.js";import{B as v}from"./Button.abe25af2.js";class J extends Error{constructor(r){super(r);x(this,"name","RingoError")}}const m=o=>(I("data-v-fbcaa0e1"),o=o(),$(),o),K=m(()=>l("p",{class:"text-line"},"Classes descrevem a voca\xE7\xE3o de um personagem e suas aptid\xF5es especiais. Hora de escolher a sua.",-1)),U=m(()=>l("p",{class:"text-line small"},[g("Se ficar em d\xFAvida, apenas clique em "),l("span",{class:"bold"},"continuar"),g(".")],-1)),O=m(()=>l("p",{class:"text-line small"},"A Ringo escolher\xE1 uma classe aleat\xF3ria para voc\xEA.",-1)),P={class:"class-select-area"},Q=["disabled","value"],W={class:"button-area"},X={key:0,class:"class-info-area"},Y=m(()=>l("h2",null,"Detalhes",-1)),Z={class:"class-name-wrapper"},ee=D({__name:"Classes",setup(o){const{character:a}=M(),{classes:r}=H(),n=b([]);a.books.forEach(t=>{const s=r.get(t);if(s)for(const[e,c]of s.entries())n.push([e,c,t])});const i=V(null);b(new Map);const k=F(()=>n.length<1||typeof i.value!="number");n.length>0&&n.sort((t,s)=>t[1].localeCompare(s[1],"pt-br"));function h(t,s,e=1){if(typeof t!="number"||typeof s!="number"){if(i.value===null)return;t=i.value;const c=n.find(S=>S[0]===t);if(!c)throw new J("N\xE3o foi poss\xEDvel encontrar a classe na lista.");s=c[2]}a.class.set(t,{book:s,level:e})}function w(){if(a.class.size===0){const t=Math.floor(Math.random()*n.length),s=typeof i.value=="number"?i.value:t;h(n[s][0],n[s][2])}}return N(()=>{const t=(e,c)=>c===e[0],s=new Set;for(const e of a.class.keys())n.some(c=>t(c,e))||s.add(e);s.forEach(e=>a.class.delete(e))}),(t,s)=>(d(),u("section",null,[K,U,O,l("div",P,[T(l("select",{"onUpdate:modelValue":s[0]||(s[0]=e=>i.value=e)},[(d(!0),u(C,null,y(n,e=>(d(),u("option",{key:e[0],disabled:p(a).class.has(e[0]),value:e[0]},E(e[1]),9,Q))),128))],512),[[L,i.value,void 0,{number:!0}]])]),l("div",W,[f(v,{disabled:n.length<1,text:"Continuar",onClick:_(w,["prevent"])},null,8,["disabled","onClick"]),f(v,{disabled:p(k),text:"Adicionar classe",onClick:s[1]||(s[1]=_(e=>h(),["prevent"]))},null,8,["disabled"]),f(v,{text:"Voltar",onClick:s[2]||(s[2]=_(e=>p(j).push({name:"create-char-step-2"}),["prevent"]))})]),f(z,{name:"fade",mode:"out-in"},{default:R(()=>[p(a).class.size>0?(d(),u("div",X,[Y,l("div",Z,[(d(!0),u(C,null,y(p(a).class,e=>(d(),u("span",{class:"bold green span-wrapper",key:e[0]},E(e[0]),1))),128))])])):q("",!0)]),_:1})]))}});const ne=G(ee,[["__scopeId","data-v-fbcaa0e1"]]);export{ne as default};
