import{d as r,f as i,o as d,c as l,a as e,y as p,G as u,u as s,b as _,w as m,p as h,h as x,e as v,_ as f}from"./index.c6ecb24b.js";import{B as g}from"./Button.6504c797.js";const c=t=>(h("data-v-6ac29587"),t=t(),x(),t),B=c(()=>e("p",{class:"text-line"},"Este guia te ajudar\xE1 a criar o seu novo personagem, que poder\xE1 sempre ser usado na Ringo.",-1)),E=c(()=>e("p",{class:"text-line"},"Antes de come\xE7ar, digite o nome que deseja!",-1)),I={class:"input-area"},b={class:"button-area"},k=r({__name:"Welcome",setup(t){const{character:o}=i();return(w,a)=>(d(),l("section",null,[B,E,e("div",I,[p(e("input",{"onUpdate:modelValue":a[0]||(a[0]=n=>s(o).name=n),type:"text",minlength:"1",maxlength:"30",spellcheck:"false"},null,512),[[u,s(o).name,void 0,{trim:!0}]])]),e("div",b,[_(g,{text:"Iniciar",disabled:!s(o).name,onClick:a[1]||(a[1]=m(n=>s(v).push({name:"create-char-step-1"}),["prevent"]))},null,8,["disabled"])])]))}});const C=f(k,[["__scopeId","data-v-6ac29587"]]);export{C as default};
