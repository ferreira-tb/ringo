import{d as b,f as _,o as n,c as r,a as o,F as x,l as h,u as e,b as l,w as i,A as u,y as v,B as f,t as B,e as d}from"./index.28df1c82.js";import{u as C}from"./game.34129aff.js";import{B as c}from"./Button.4e1ae61b.js";const V=o("p",{class:"text-line"},"Quais livros voc\xEA deseja usar para construir seu personagem?",-1),g=o("p",{class:"text-line small"},[u("Se n\xE3o souber o que responder, apenas clique em "),o("span",{class:"bold"},"continuar"),u(".")],-1),E={class:"books-area"},S={class:"checkbox-label"},w=["id","value"],y={class:"button-area"},F=b({__name:"Books",setup(N){const{books:p}=C(),{character:a,resetBooks:m}=_();return($,s)=>(n(),r("section",null,[V,g,o("div",E,[(n(!0),r(x,null,h(e(p),t=>(n(),r("label",S,[v(o("input",{type:"checkbox",name:"books","onUpdate:modelValue":s[0]||(s[0]=k=>e(a).books=k),id:`book_${t[0]}`,value:t[0]},null,8,w),[[f,e(a).books]]),u(" "+B(t[1]),1)]))),256))]),o("div",y,[l(c,{text:"Continuar",disabled:e(a).books.length<1,onClick:s[1]||(s[1]=i(t=>e(d).push({name:"create-char-step-2"}),["prevent"]))},null,8,["disabled"]),l(c,{text:"Padr\xE3o",onClick:i(e(m),["prevent"])},null,8,["onClick"]),l(c,{text:"Voltar",onClick:s[2]||(s[2]=i(t=>e(d).push({name:"create-char"}),["prevent"]))})])]))}});export{F as default};