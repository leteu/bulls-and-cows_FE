import{d as s,o,c as u,a as m,F as v,r as g,b as p,w as f,u as c,f as C,g as h,h as n,U as b,M as l,i as B,s as P,j,_ as x}from"./index-5869449f.js";const $={class:"plate-appearance"},w={class:"marble-container"},M={key:1,class:"marble-place"},S=s({__name:"PlateAppearance",props:{value:{type:Object,default:()=>[]},call:{type:Array,default:()=>[]}},setup(a){const t=a;return(e,k)=>{const i=C("temeplate");return o(),u("div",$,[m("div",w,[(o(),u(v,null,g(4,d=>p(i,null,{default:f(()=>[t.value[d-1]?(o(),h(c(r),{key:0,batted:t.value[d-1]},null,8,["batted"])):(o(),u("div",M))]),_:2},1024)),64))]),p(c(A),{call:a.call},null,8,["call"])])}}}),y=s({props:{done:{type:Boolean},call:{type:Number}},setup(a){return()=>n("div",{})}}),A=s({props:{call:{type:Array}},setup(a,{emit:t}){return()=>n("div",{class:"jumbotron-box"},a.call?a.call.map(e=>n(y,{class:{"jumbotron-indicator":!0,"jumbotron-indicator__out":e===b.Out,"jumbotron-indicator__ball":e===b.Ball,"jumbotron-indicator__strike":e===b.Strike}})):Array.from({length:4}).map(()=>n(y,{class:"jumbotron-indicator jumbotron-indicator__out"})))}}),r=s({props:{batted:{type:Number,required:!0}},setup(a){return()=>n("div",{class:`marble marble-${a.batted}`})}}),I=s({emits:{"click:marble"(a,t){return{num:a,e:t}}},setup(a,{emit:t}){return()=>n("div",{class:"color-palette"},[n(r,{batted:l.Orange,onClick:e=>t("click:marble",l.Orange,e)}),n(r,{batted:l.Purple,onClick:e=>t("click:marble",l.Purple,e)}),n(r,{batted:l.Green,onClick:e=>t("click:marble",l.Green,e)}),n(r,{batted:l.Yellow,onClick:e=>t("click:marble",l.Yellow,e)}),n(r,{batted:l.Blue,onClick:e=>t("click:marble",l.Blue,e)}),n(r,{batted:l.Pink,onClick:e=>t("click:marble",l.Pink,e)})])}}),N={class:"page"},O={class:"play-board"},T={class:"plate-appearance-container"},U=s({__name:"SinglePlay",setup(a){const t=B(),{currentInning:e}=P(t),k=i=>{if(e.value.value.includes(i)){alert("이미 선택된 구슬입니다.");return}t.addMableToInning(e.value.key,i)};return j(()=>{t.getNewAnswer()}),(i,d)=>(o(),u("div",N,[m("div",O,[m("div",T,[(o(),u(v,null,g(8,_=>p(c(S),{key:`plate-${_}`,call:c(t).getUmpireCall(_-1),value:c(t).getInning(_-1)},null,8,["call","value"])),64))]),p(c(I),{"onClick:marble":k})])]))}});const G=x(U,[["__scopeId","data-v-53b409d9"]]);export{G as default};