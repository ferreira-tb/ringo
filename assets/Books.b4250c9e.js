import{d as b,f as x,o as n,c as r,a as o,F as _,k as h,u as e,b as l,w as i,z as u,x as v,E as f,t as B,e as d}from"./index.7354bdf1.js";import{u as C}from"./game.26d1837b.js";import{B as c}from"./Button.27cdcd0c.js";const E=o("p",{class:"text-line"},"Quais livros voc\xEA deseja usar para construir seu personagem?",-1),V=o("p",{class:"text-line small"},[u("Se n\xE3o souber o que responder, apenas clique em "),o("span",{class:"bold"},"continuar"),u(".")],-1),g={class:"books-area"},S={class:"checkbox-label"},w=["id","value"],N={class:"button-area"},M=b({__name:"Books",setup($){const{books:p}=C(),{character:a,resetBooks:k}=x();return(q,s)=>(n(),r("section",null,[E,V,o("div",g,[(n(!0),r(_,null,h(e(p),t=>(n(),r("label",S,[v(o("input",{type:"checkbox",name:"books","onUpdate:modelValue":s[0]||(s[0]=m=>e(a).books=m),id:`book_${t[0]}`,value:t[0]},null,8,w),[[f,e(a).books]]),u(" "+B(t[1]),1)]))),256))]),o("div",N,[l(c,{text:"Continuar",disabled:e(a).books.length<1,onClick:s[1]||(s[1]=i(t=>e(d).push({name:"create-char-step-2"}),["prevent"]))},null,8,["disabled"]),l(c,{text:"Padr\xE3o",onClick:i(e(k),["prevent"])},null,8,["onClick"]),l(c,{text:"Voltar",onClick:s[2]||(s[2]=i(t=>e(d).push({name:"create-char"}),["prevent"]))})])]))}});export{M as default};
