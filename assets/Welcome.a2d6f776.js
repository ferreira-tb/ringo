import{d,u as i,o as p,c as l,b as e,k as u,v as _,a,e as m,w as v,p as x,g as f,r as h,_ as S}from"./index.58d89bef.js";import{S as g}from"./StandardButton.71fe4724.js";const r=t=>(x("data-v-e8f18569"),t=t(),f(),t),E=r(()=>e("p",{class:"text-line"},"Este guia te ajudar\xE1 a criar o seu novo personagem, que poder\xE1 sempre ser usado na Ringo.",-1)),I=r(()=>e("p",{class:"text-line"},"Antes de come\xE7ar, digite o nome que deseja!",-1)),b={class:"input-area"},k={class:"button-area"},w=d({__name:"Welcome",setup(t){const c=i(),{character:o}=c;return(B,s)=>(p(),l("section",null,[E,I,e("div",b,[u(e("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=n=>a(o).name=n)},null,512),[[_,a(o).name,void 0,{trim:!0}]])]),e("div",k,[m(g,{text:"Iniciar",disabled:!a(o).name,onClick:s[1]||(s[1]=v(n=>a(h).push({name:"create-char-step-1"}),["prevent"]))},null,8,["disabled"])])]))}});const V=S(w,[["__scopeId","data-v-e8f18569"]]);export{V as default};