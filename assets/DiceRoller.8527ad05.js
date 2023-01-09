import{d as M,s as F,o as d,c as f,a,w as C,F as B,r as z,u as l,b as e,t as x,T as G,p as L,e as O,_ as I,f as Q,g as E,h as V,n as D,i as w,j as b,k as S,v as W,l as J,m as T,q as P,x as Y,y as A,z as N,A as U,B as H,C as Z}from"./index.a63e209c.js";import{u as K,B as p,R as X,D as ee,a as te,g as le}from"./Button.cc62417c.js";const oe=o=>(L("data-v-82c2ebeb"),o=o(),O(),o),se={class:"history-area"},ne=oe(()=>e("h2",null,"Hist\xF3rico",-1)),ae=["onClick"],ue={class:"small"},ie=M({__name:"DiceHistory",setup(o){const R=K(),{diceHistory:s}=R,{chosenDice:g,diceAmount:u,modifier:i,rollType:y}=F(R);function c(m){g.value=m.dice,u.value=m.amount,i.value=m.modToSum,y.value=m.type}function h(m){return`${new Date(m).toLocaleTimeString("pt-br")}`}return(m,$)=>(d(),f("section",se,[ne,a(G,{name:"list"},{default:C(()=>[(d(!0),f(B,null,z(l(s),n=>(d(),f("div",{key:n.date,onClick:v=>c(n)},[e("span",null,x(`${n.text} = ${n.finalResult}`),1),e("span",ue,x(h(n.date)),1)],8,ae))),128))]),_:1})]))}});const de=I(ie,[["__scopeId","data-v-82c2ebeb"]]),re=M({__name:"BlurBackground",emits:["closeModal"],setup(o){return(R,s)=>(d(),f("div",{class:"blur-bg",onClick:s[0]||(s[0]=Q(g=>R.$emit("closeModal"),["self"]))}))}});const ce=I(re,[["__scopeId","data-v-c40a8daa"]]),ve={class:"result-modal"},_e={key:0},me={class:"rolls"},pe={key:0,class:"other-roll"},fe={key:0,class:"save-area"},ye=["onKeyup"],xe={class:"button-area"},Re=M({__name:"DiceResultModal",props:{rollResult:null},emits:["hideResult","rollAgain"],setup(o,{emit:R}){const s=o,{diceCollection:g}=K(),u=E(!1),i=E(null),y=V(()=>({bold:!0,"green-text":s.rollResult.finalResult===s.rollResult.maxValue,"red-text":s.rollResult.finalResult===s.rollResult.minValue})),c=V(()=>({bold:!0,"green-text":s.rollResult.type==="vantagem","red-text":s.rollResult.type==="desvantagem"}));function h(n){return{"green-text":n.value===s.rollResult.dice,"red-text":n.value===1}}function m(){u.value=!1,i.value=null,R("rollAgain")}function $(){if(typeof i.value!="string")throw new X("O nome escolhido para a rolagem \xE9 inv\xE1lido.");if(i.value.length===0)return;const{dice:n,amount:v,modToSum:k,type:_}=s.rollResult,t=new ee(n,v,k,_);g.set(i.value,t),u.value=!1,i.value=null}return(n,v)=>{const k=P("focus");return d(),f("div",null,[a(ce,{onCloseModal:v[0]||(v[0]=_=>n.$emit("hideResult"))}),e("div",ve,[e("div",null,[e("div",null,x(o.rollResult.text),1),e("div",{class:D(["final-result",l(y)])},x(o.rollResult.finalResult),3),o.rollResult.type!=="normal"?(d(),f("div",_e,[w(" Rolado com "),e("span",{class:D(l(c))},x(o.rollResult.type),3)])):b("",!0),e("div",me,[(d(!0),f(B,null,z(o.rollResult.rolls,_=>(d(),f(B,null,[e("span",{class:D(["each-roll",h(_)])},x(_.value),3),o.rollResult.type!=="normal"?(d(),f("span",pe,x(`(${_.other})`),1)):b("",!0)],64))),256))])]),a(T,{name:"fade",mode:"out-in"},{default:C(()=>[u.value?(d(),f("div",fe,[S(e("input",{"onUpdate:modelValue":v[1]||(v[1]=_=>i.value=_),type:"text",maxlength:"30",placeholder:"Digite um nome",ref:"textInput",onKeyup:J($,["enter"])},null,40,ye),[[k],[W,i.value,void 0,{trim:!0}]]),a(p,{text:"OK",onClick:$})])):b("",!0)]),_:1}),e("div",xe,[a(p,{text:"Repetir",onClick:m}),a(p,{text:"Salvar",onClick:v[2]||(v[2]=_=>u.value=!0),disabled:u.value},null,8,["disabled"]),a(p,{text:"Voltar",onClick:v[3]||(v[3]=_=>n.$emit("hideResult"))})])])])}}});const ge=I(Re,[["__scopeId","data-v-8cced20b"]]),j=o=>(L("data-v-e07e78de"),o=o(),O(),o),he={class:"dice-roller"},$e={class:"result-area"},be={class:"result-text"},ke={class:"mod-area"},Ce={class:"mod-row"},De=j(()=>e("span",{class:"bold"},"Quantidade",-1)),we={class:"bold green-text"},Se={class:"mod-row"},Te=j(()=>e("span",{class:"bold"},"Modificador",-1)),Be={class:"radio-area"},Ve=["disabled"],Me=["disabled"],Ie=["disabled"],Ae={class:"dice-area"},Ne=M({__name:"DiceRoller",setup(o){const R=K(),{diceHistory:s,diceTypes:g}=R,{chosenDice:u,diceAmount:i,modifier:y,rollType:c}=F(R),h=Y({width:"80%",height:"3em",fontSize:"1em",fontWeight:550}),m=V(()=>u.value===null?null:le(u.value,i.value,y.value)),$=V(()=>({bold:!0,"green-text":y.value>=0,"red-text":y.value<0})),n=E(null);function v(){if(u.value===null)throw new X("Nenhum dado foi escolhido.");const _=new te(u.value,i.value,y.value,c.value);for(n.value=_;s.length>5;)s.pop();s.unshift(_)}function k(){i.value>1&&i.value--}return(_,t)=>(d(),f("main",he,[e("div",$e,[e("div",be,[a(T,{name:"fade",mode:"out-in"},{default:C(()=>[l(m)?(d(),f("span",{key:l(m)},x(l(m)),1)):b("",!0)]),_:1})]),a(p,{class:"roll-button",text:"Rolar",disabled:l(u)===null,onClick:v},null,8,["disabled"])]),a(T,{name:"fade",mode:"out-in"},{default:C(()=>[n.value?(d(),H(ge,{key:0,rollResult:n.value,onHideResult:t[0]||(t[0]=r=>n.value=null),onRollAgain:v},null,8,["rollResult"])):b("",!0)]),_:1}),e("div",ke,[e("div",Ce,[a(p,{text:"X",onClick:t[1]||(t[1]=r=>i.value=1)}),De,a(p,{text:"-",onClick:k}),e("span",we,x(l(i)),1),a(p,{text:"+",onClick:t[2]||(t[2]=r=>i.value++)})]),e("div",Se,[a(p,{text:"X",onClick:t[3]||(t[3]=r=>y.value=0)}),Te,a(p,{text:"-",onClick:t[4]||(t[4]=r=>y.value--)}),e("span",{class:D(l($))},x(l(y)),3),a(p,{text:"+",onClick:t[5]||(t[5]=r=>y.value++)})]),e("div",Be,[e("label",null,[S(e("input",{type:"radio",value:"normal","onUpdate:modelValue":t[6]||(t[6]=r=>N(c)?c.value=r:null),disabled:l(u)!==20},null,8,Ve),[[A,l(c)]]),w(" Normal ")]),e("label",null,[S(e("input",{type:"radio",value:"vantagem","onUpdate:modelValue":t[7]||(t[7]=r=>N(c)?c.value=r:null),disabled:l(u)!==20},null,8,Me),[[A,l(c)]]),w(" Vantagem ")]),e("label",null,[S(e("input",{type:"radio",value:"desvantagem","onUpdate:modelValue":t[8]||(t[8]=r=>N(c)?c.value=r:null),disabled:l(u)!==20},null,8,Ie),[[A,l(c)]]),w(" Desvantagem ")])])]),e("div",Ae,[(d(!0),f(B,null,z(l(g),(r,q)=>(d(),H(p,{style:U(h),text:`D${r}`,key:q,onClick:He=>u.value=r},null,8,["style","text","onClick"]))),128)),a(p,{text:"Cole\xE7\xE3o",style:U(h),onClick:t[9]||(t[9]=r=>l(Z).push({name:"collection"}))},null,8,["style"])]),a(T,{name:"fade",mode:"out-in"},{default:C(()=>[l(s).length>0?(d(),H(de,{key:0})):b("",!0)]),_:1})]))}});const Ke=I(Ne,[["__scopeId","data-v-e07e78de"]]);export{Ke as default};
