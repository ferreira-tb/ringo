import{d as _,u as h,o as r,c as n,b as t,F as v,m as f,a as e,e as l,w as i,q as u,l as C,x as B,t as S,r as d}from"./index.ed7861fd.js";import{u as g}from"./game.e1758bde.js";import{B as c}from"./Button.c941bf8a.js";const V=t("p",{class:"text-line"},"Quais livros voc\xEA deseja usar para construir seu personagem?",-1),E=t("p",{class:"text-line small"},[u("Se n\xE3o souber o que responder, apenas clique em "),t("span",{class:"bold"},"continuar"),u(".")],-1),q={class:"books-area"},w={class:"checkbox-label"},N=["id","value"],$={class:"button-area"},A=_({__name:"Books",setup(y){const p=g(),{books:m}=p,b=h(),{character:a,resetBooks:k}=b;return(D,s)=>(r(),n("section",null,[V,E,t("div",q,[(r(!0),n(v,null,f(e(m),o=>(r(),n("label",w,[C(t("input",{type:"checkbox",name:"books","onUpdate:modelValue":s[0]||(s[0]=x=>e(a).books=x),id:`book_${o[0]}`,value:o[0]},null,8,N),[[B,e(a).books]]),u(" "+S(o[1]),1)]))),256))]),t("div",$,[l(c,{text:"Continuar",disabled:e(a).books.length<1,onClick:s[1]||(s[1]=i(o=>e(d).push({name:"create-char-step-2"}),["prevent"]))},null,8,["disabled"]),l(c,{text:"Padr\xE3o",onClick:i(e(k),["prevent"])},null,8,["onClick"]),l(c,{text:"Voltar",onClick:s[2]||(s[2]=i(o=>e(d).push({name:"create-char"}),["prevent"]))})])]))}});export{A as default};
