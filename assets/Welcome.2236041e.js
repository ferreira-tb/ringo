import{d,u as i,o as p,c as l,b as e,k as u,v as _,a as s,e as m,w as v,p as x,g as h,r as f,_ as b}from"./index.4ea20eb7.js";import{S as g}from"./StandardButton.c6234b31.js";const r=t=>(x("data-v-31bcde4a"),t=t(),h(),t),S=r(()=>e("p",{class:"text-line"},"Este guia te ajudar\xE1 a criar o seu novo personagem, que poder\xE1 sempre ser usado na Ringo.",-1)),E=r(()=>e("p",{class:"text-line"},"Antes de come\xE7ar, digite o nome que deseja!",-1)),I={class:"input-area"},k={class:"button-area"},w=d({__name:"Welcome",setup(t){const c=i(),{character:o}=c;return(B,a)=>(p(),l("section",null,[S,E,e("div",I,[u(e("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=n=>s(o).name=n)},null,512),[[_,s(o).name,void 0,{trim:!0}]])]),e("div",k,[m(g,{text:"Iniciar",disabled:s(o).name.length<1,onClick:a[1]||(a[1]=v(n=>s(f).push({name:"create-char-step-1"}),["prevent"]))},null,8,["disabled"])])]))}});const V=b(w,[["__scopeId","data-v-31bcde4a"]]);export{V as default};
