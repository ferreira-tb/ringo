import{d as b,u as x,c as n,b as o,F as _,q as h,a as e,e as r,w as l,x as u,o as i,m as v,y as f,t as B,r as d}from"./index.c770b2c0.js";import{u as C}from"./game.caf39fbe.js";import{B as c}from"./Button.e9826086.js";const V=o("p",{class:"text-line"},"Quais livros voc\xEA deseja usar para construir seu personagem?",-1),g=o("p",{class:"text-line small"},[u("Se n\xE3o souber o que responder, apenas clique em "),o("span",{class:"bold"},"continuar"),u(".")],-1),E={class:"books-area"},S={class:"checkbox-label"},q=["id","value"],w={class:"button-area"},M=b({__name:"Books",setup(y){const{books:p}=C(),{character:a,resetBooks:m}=x();return(N,s)=>(i(),n("section",null,[V,g,o("div",E,[(i(!0),n(_,null,h(e(p),t=>(i(),n("label",S,[v(o("input",{type:"checkbox",name:"books","onUpdate:modelValue":s[0]||(s[0]=k=>e(a).books=k),id:`book_${t[0]}`,value:t[0]},null,8,q),[[f,e(a).books]]),u(" "+B(t[1]),1)]))),256))]),o("div",w,[r(c,{text:"Continuar",disabled:e(a).books.length<1,onClick:s[1]||(s[1]=l(t=>e(d).push({name:"create-char-step-2"}),["prevent"]))},null,8,["disabled"]),r(c,{text:"Padr\xE3o",onClick:l(e(m),["prevent"])},null,8,["onClick"]),r(c,{text:"Voltar",onClick:s[2]||(s[2]=l(t=>e(d).push({name:"create-char"}),["prevent"]))})])]))}});export{M as default};