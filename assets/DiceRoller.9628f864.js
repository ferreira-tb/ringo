var J=Object.defineProperty;var K=(o,t,e)=>t in o?J(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var _=(o,t,e)=>(K(o,typeof t!="symbol"?t+"":t,e),e);import{d as b,s as L,o as m,c as f,b as v,i as M,F as g,j as H,u as r,a as s,t as y,T as P,p as O,h as X,_ as k,k as A,l as E,g as $,r as Y,m as Z,q as z,v as V,x as S,y as B,z as T,A as I,n as F,e as ee}from"./index.63e941d5.js";import{u as j}from"./dice.3bfda6e4.js";import{R as N,r as U,g as q}from"./helpers.1b27ed9b.js";import{B as p}from"./Button.d225ce8b.js";class te{constructor(t,e){_(this,"type");_(this,"value");_(this,"other");this.type=e;const n=U(t),l=U(t);if(e==="normal")this.value=n,this.other=null;else if(e==="vantagem")this.value=n>=l?n:l,this.other=n>=l?l:n;else if(e==="desvantagem")this.value=n<=l?n:l,this.other=n<=l?l:n;else throw new N("O tipo \xE9 inv\xE1lido.")}}class le{constructor(t,e,n){_(this,"date",Date.now());_(this,"dice");_(this,"amount");_(this,"modToSum");_(this,"minValue");_(this,"maxValue");_(this,"text");this.dice=t,this.amount=e,this.modToSum=n,this.minValue=e+n,this.maxValue=t*e+n,this.text=q(t,e,n)}}class se extends le{constructor(e,n,l,u){super(e,n,l);_(this,"finalResult");_(this,"type");_(this,"rolls",[]);this.type=e===20?u:"normal";let a=0;for(;a<n;){a++;const d=new te(e,this.type);this.rolls.push(d)}if(this.rolls.length===0)throw new N("Nenhum dado foi rolado.");this.finalResult=this.rolls.reduce((d,R)=>d+R.value,this.modToSum)}}const oe=o=>(O("data-v-de20755e"),o=o(),X(),o),ne={class:"history-area"},ae=oe(()=>s("h2",null,"Hist\xF3rico",-1)),ie=["onClick"],ue={class:"small"},re=b({__name:"DiceHistory",setup(o){const t=j(),{diceHistory:e}=t,{chosenDice:n,diceAmount:l,modifier:u,rollType:a}=L(t);function d(h){n.value=h.dice,l.value=h.amount,u.value=h.modToSum,a.value=h.type}function R(h){return`${new Date(h).toLocaleTimeString("pt-br")}`}return(h,C)=>(m(),f("section",ne,[ae,v(P,{name:"list"},{default:M(()=>[(m(!0),f(g,null,H(r(e),x=>(m(),f("div",{key:x.date,onClick:D=>d(x)},[s("span",null,y(`${x.text} = ${x.finalResult}`),1),s("span",ue,y(R(x.date)),1)],8,ie))),128))]),_:1})]))}});const de=k(re,[["__scopeId","data-v-de20755e"]]),ce=b({__name:"BlurBackground",emits:["closeModal"],setup(o){return(t,e)=>(m(),f("div",{class:"blur-bg",onClick:e[0]||(e[0]=n=>t.$emit("closeModal"))}))}});const ve=k(ce,[["__scopeId","data-v-f2b57531"]]),_e={class:"result-modal"},me={class:"result-area"},pe={class:"rolls"},he={key:0,class:"other-roll"},fe={class:"button-area"},xe=b({__name:"ResultModal",props:{rollResult:null},emits:["hideResult","rollAgain"],setup(o){const t=o,e=A(()=>({bold:!0,"green-text":t.rollResult.finalResult===t.rollResult.maxValue,"red-text":t.rollResult.finalResult===t.rollResult.minValue}));function n(l){return{"green-text":l.value===t.rollResult.dice,"red-text":l.value===1}}return(l,u)=>(m(),f(g,null,[v(ve,{onCloseModal:u[0]||(u[0]=a=>l.$emit("hideResult"))}),s("div",_e,[s("div",me,[s("div",null,y(o.rollResult.text),1),s("div",{class:E(["final-result",r(e)])},y(o.rollResult.finalResult),3),s("div",pe,[(m(!0),f(g,null,H(o.rollResult.rolls,a=>(m(),f(g,null,[s("span",{class:E(["each-roll",n(a)])},y(a.value),3),o.rollResult.type!=="normal"?(m(),f("span",he,y(`(${a.other})`),1)):$("",!0)],64))),256))])]),s("div",fe,[v(p,{text:"Repetir",onClick:u[1]||(u[1]=a=>l.$emit("rollAgain"))}),v(p,{text:"Salvar"}),v(p,{text:"Voltar",onClick:u[2]||(u[2]=a=>l.$emit("hideResult"))})])])],64))}});const ye=k(xe,[["__scopeId","data-v-bb9ff1a4"]]),G=o=>(O("data-v-26d98ab4"),o=o(),X(),o),Re={class:"dice-roller"},ge={class:"result-area"},$e={class:"result-text"},be={class:"mod-area"},ke={class:"mod-row"},Ce=G(()=>s("span",{class:"bold"},"Quantidade",-1)),De={class:"bold green-text"},we={class:"mod-row"},Ve=G(()=>s("span",{class:"bold"},"Modificador",-1)),Se={class:"radio-area"},Be=["disabled"],Te=["disabled"],Ie=["disabled"],Me={class:"dice-area"},Ae=b({__name:"DiceRoller",setup(o){const t=j(),{diceHistory:e,diceTypes:n}=t,{chosenDice:l,diceAmount:u,modifier:a,rollType:d}=L(t),R=Y({width:"80%",height:"3em",fontSize:"1em",fontWeight:550}),h=A(()=>l.value===null?null:q(l.value,u.value,a.value)),C=A(()=>({bold:!0,"green-text":a.value>=0,"red-text":a.value<0})),x=Z(null);function D(){if(l.value===null)throw new N("Nenhum dado foi escolhido.");const w=new se(l.value,u.value,a.value,d.value);for(x.value=w;e.length>5;)e.pop();e.unshift(w)}function Q(){u.value>1&&u.value--}return(w,i)=>(m(),f("main",Re,[s("div",ge,[s("div",$e,[v(z,{name:"fade",mode:"out-in"},{default:M(()=>[r(h)?(m(),f("span",{key:r(h)},y(r(h)),1)):$("",!0)]),_:1})]),v(p,{class:"roll-button",text:"Rolar",disabled:r(l)===null,onClick:D},null,8,["disabled"])]),x.value?(m(),V(ye,{key:0,rollResult:x.value,onHideResult:i[0]||(i[0]=c=>x.value=null),onRollAgain:D},null,8,["rollResult"])):$("",!0),s("div",be,[s("div",ke,[v(p,{text:"X",onClick:i[1]||(i[1]=c=>u.value=1)}),Ce,v(p,{text:"-",onClick:Q}),s("span",De,y(r(u)),1),v(p,{text:"+",onClick:i[2]||(i[2]=c=>u.value++)})]),s("div",we,[v(p,{text:"X",onClick:i[3]||(i[3]=c=>a.value=0)}),Ve,v(p,{text:"-",onClick:i[4]||(i[4]=c=>a.value--)}),s("span",{class:E(r(C))},y(r(a)),3),v(p,{text:"+",onClick:i[5]||(i[5]=c=>a.value++)})]),s("div",Se,[s("label",null,[S(s("input",{type:"radio",value:"normal","onUpdate:modelValue":i[6]||(i[6]=c=>T(d)?d.value=c:null),disabled:r(l)!==20},null,8,Be),[[B,r(d)]]),I(" Normal ")]),s("label",null,[S(s("input",{type:"radio",value:"vantagem","onUpdate:modelValue":i[7]||(i[7]=c=>T(d)?d.value=c:null),disabled:r(l)!==20},null,8,Te),[[B,r(d)]]),I(" Vantagem ")]),s("label",null,[S(s("input",{type:"radio",value:"desvantagem","onUpdate:modelValue":i[8]||(i[8]=c=>T(d)?d.value=c:null),disabled:r(l)!==20},null,8,Ie),[[B,r(d)]]),I(" Desvantagem ")])])]),s("div",Me,[(m(!0),f(g,null,H(r(n),(c,W)=>(m(),V(p,{style:F(R),text:`D${c}`,key:W,onClick:Ee=>l.value=c},null,8,["style","text","onClick"]))),128)),v(p,{text:"Cole\xE7\xE3o",style:F(R),onClick:i[9]||(i[9]=c=>r(ee).push({name:"dice-collection"}))},null,8,["style"])]),v(z,{name:"fade",mode:"out-in"},{default:M(()=>[r(e).length>0?(m(),V(de,{key:0})):$("",!0)]),_:1})]))}});const Le=k(Ae,[["__scopeId","data-v-26d98ab4"]]);export{Le as default};
