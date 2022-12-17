import{d as B,s as L,o as c,c as x,b as n,i as C,F as T,j as z,u as s,a as e,t as g,T as K,p as O,h as X,_ as I,w as Q,k as D,l as N,m as W,q as E,v as w,x as J,g as b,y as S,r as P,z as M,A as V,B as A,C as H,n as F,e as Y}from"./index.d294f8f8.js";import{u as U,D as Z,a as ee}from"./objects.df4299b3.js";import{R as j,g as te}from"./helpers.da37dee5.js";import{B as p}from"./Button.d2bce5d1.js";const le=a=>(O("data-v-de20755e"),a=a(),X(),a),oe={class:"history-area"},se=le(()=>e("h2",null,"Hist\xF3rico",-1)),ne=["onClick"],ae={class:"small"},ue=B({__name:"DiceHistory",setup(a){const y=U(),{diceHistory:u}=y,{chosenDice:R,diceAmount:i,modifier:d,rollType:l}=L(y);function v(m){R.value=m.dice,i.value=m.amount,d.value=m.modToSum,l.value=m.type}function h(m){return`${new Date(m).toLocaleTimeString("pt-br")}`}return(m,$)=>(c(),x("section",oe,[se,n(K,{name:"list"},{default:C(()=>[(c(!0),x(T,null,z(s(u),o=>(c(),x("div",{key:o.date,onClick:_=>v(o)},[e("span",null,g(`${o.text} = ${o.finalResult}`),1),e("span",ae,g(h(o.date)),1)],8,ne))),128))]),_:1})]))}});const ie=I(ue,[["__scopeId","data-v-de20755e"]]),de=B({__name:"BlurBackground",emits:["closeModal"],setup(a){return(y,u)=>(c(),x("div",{class:"blur-bg",onClick:u[0]||(u[0]=Q(R=>y.$emit("closeModal"),["self"]))}))}});const re=I(de,[["__scopeId","data-v-c40a8daa"]]),ce={class:"result-modal"},ve={class:"rolls"},_e={key:0,class:"other-roll"},me={key:0,class:"save-area"},pe={class:"button-area"},fe=B({__name:"ResultModal",props:{rollResult:null},emits:["hideResult","rollAgain"],setup(a,{emit:y}){const u=a,{diceCollection:R}=U(),i=D(null),d=D(!1),l=D(null),v=N(()=>({bold:!0,"green-text":u.rollResult.finalResult===u.rollResult.maxValue,"red-text":u.rollResult.finalResult===u.rollResult.minValue}));W(i,()=>{i.value instanceof HTMLInputElement&&i.value.focus()});function h(o){return{"green-text":o.value===u.rollResult.dice,"red-text":o.value===1}}function m(){d.value=!1,l.value=null,y("rollAgain")}function $(){if(typeof l.value!="string")throw new j("O nome escolhido para a rolagem \xE9 inv\xE1lido.");if(l.value.length===0)return;const{dice:o,amount:_,modToSum:f,type:k}=u.rollResult,t=new Z(o,_,f,k);R.set(l.value,t),d.value=!1,l.value=null}return(o,_)=>(c(),x("div",null,[n(re,{onCloseModal:_[0]||(_[0]=f=>o.$emit("hideResult"))}),e("div",ce,[e("div",null,[e("div",null,g(a.rollResult.text),1),e("div",{class:E(["final-result",s(v)])},g(a.rollResult.finalResult),3),e("div",ve,[(c(!0),x(T,null,z(a.rollResult.rolls,f=>(c(),x(T,null,[e("span",{class:E(["each-roll",h(f)])},g(f.value),3),a.rollResult.type!=="normal"?(c(),x("span",_e,g(`(${f.other})`),1)):b("",!0)],64))),256))])]),n(S,{name:"fade",mode:"out-in"},{default:C(()=>[d.value?(c(),x("div",me,[w(e("input",{"onUpdate:modelValue":_[1]||(_[1]=f=>l.value=f),type:"text",maxlength:"50",placeholder:"Digite um nome",ref_key:"textInput",ref:i},null,512),[[J,l.value,void 0,{trim:!0}]]),n(p,{text:"OK",onClick:$})])):b("",!0)]),_:1}),e("div",pe,[n(p,{text:"Repetir",onClick:m}),n(p,{text:"Salvar",onClick:_[2]||(_[2]=f=>d.value=!0),disabled:d.value},null,8,["disabled"]),n(p,{text:"Voltar",onClick:_[3]||(_[3]=f=>o.$emit("hideResult"))})])])]))}});const xe=I(fe,[["__scopeId","data-v-c59dfa5a"]]),q=a=>(O("data-v-29c19e6a"),a=a(),X(),a),ye={class:"dice-roller"},ge={class:"result-area"},Re={class:"result-text"},he={class:"mod-area"},$e={class:"mod-row"},ke=q(()=>e("span",{class:"bold"},"Quantidade",-1)),Ce={class:"bold green-text"},be={class:"mod-row"},De=q(()=>e("span",{class:"bold"},"Modificador",-1)),we={class:"radio-area"},Se=["disabled"],Te=["disabled"],Be=["disabled"],Ie={class:"dice-area"},Me=B({__name:"DiceRoller",setup(a){const y=U(),{diceHistory:u,diceTypes:R}=y,{chosenDice:i,diceAmount:d,modifier:l,rollType:v}=L(y),h=P({width:"80%",height:"3em",fontSize:"1em",fontWeight:550}),m=N(()=>i.value===null?null:te(i.value,d.value,l.value)),$=N(()=>({bold:!0,"green-text":l.value>=0,"red-text":l.value<0})),o=D(null);function _(){if(i.value===null)throw new j("Nenhum dado foi escolhido.");const k=new ee(i.value,d.value,l.value,v.value);for(o.value=k;u.length>5;)u.pop();u.unshift(k)}function f(){d.value>1&&d.value--}return(k,t)=>(c(),x("main",ye,[e("div",ge,[e("div",Re,[n(S,{name:"fade",mode:"out-in"},{default:C(()=>[s(m)?(c(),x("span",{key:s(m)},g(s(m)),1)):b("",!0)]),_:1})]),n(p,{class:"roll-button",text:"Rolar",disabled:s(i)===null,onClick:_},null,8,["disabled"])]),n(S,{name:"fade",mode:"out-in"},{default:C(()=>[o.value?(c(),M(xe,{key:0,rollResult:o.value,onHideResult:t[0]||(t[0]=r=>o.value=null),onRollAgain:_},null,8,["rollResult"])):b("",!0)]),_:1}),e("div",he,[e("div",$e,[n(p,{text:"X",onClick:t[1]||(t[1]=r=>d.value=1)}),ke,n(p,{text:"-",onClick:f}),e("span",Ce,g(s(d)),1),n(p,{text:"+",onClick:t[2]||(t[2]=r=>d.value++)})]),e("div",be,[n(p,{text:"X",onClick:t[3]||(t[3]=r=>l.value=0)}),De,n(p,{text:"-",onClick:t[4]||(t[4]=r=>l.value--)}),e("span",{class:E(s($))},g(s(l)),3),n(p,{text:"+",onClick:t[5]||(t[5]=r=>l.value++)})]),e("div",we,[e("label",null,[w(e("input",{type:"radio",value:"normal","onUpdate:modelValue":t[6]||(t[6]=r=>A(v)?v.value=r:null),disabled:s(i)!==20},null,8,Se),[[V,s(v)]]),H(" Normal ")]),e("label",null,[w(e("input",{type:"radio",value:"vantagem","onUpdate:modelValue":t[7]||(t[7]=r=>A(v)?v.value=r:null),disabled:s(i)!==20},null,8,Te),[[V,s(v)]]),H(" Vantagem ")]),e("label",null,[w(e("input",{type:"radio",value:"desvantagem","onUpdate:modelValue":t[8]||(t[8]=r=>A(v)?v.value=r:null),disabled:s(i)!==20},null,8,Be),[[V,s(v)]]),H(" Desvantagem ")])])]),e("div",Ie,[(c(!0),x(T,null,z(s(R),(r,G)=>(c(),M(p,{style:F(h),text:`D${r}`,key:G,onClick:Ve=>i.value=r},null,8,["style","text","onClick"]))),128)),n(p,{text:"Cole\xE7\xE3o",style:F(h),onClick:t[9]||(t[9]=r=>s(Y).push({name:"dice-collection"}))},null,8,["style"])]),n(S,{name:"fade",mode:"out-in"},{default:C(()=>[s(u).length>0?(c(),M(ie,{key:0})):b("",!0)]),_:1})]))}});const ze=I(Me,[["__scopeId","data-v-29c19e6a"]]);export{ze as default};