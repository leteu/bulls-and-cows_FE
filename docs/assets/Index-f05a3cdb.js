import{d,o as _,c as u,a as s,t as y,n as t,b as i,u as c,e as p,_ as v}from"./index-7c63be15.js";const f="/favicon.svg";const r=d({__name:"Button",props:{label:{type:String,default:()=>""},secondary:{type:Boolean,default:()=>!1}},setup(n){return(o,a)=>(_(),u("div",{class:t(["btn",{btn__primary:!n.secondary,btn__secondary:n.secondary}])},[s("p",null,y(n.label),1)],2))}}),b=s("img",{src:f,alt:"",width:"150"},null,-1),$={class:"col flex flex-center"},x={class:"row gap"},g=d({__name:"Index",setup(n){const o=p(),a=e=>{o.push({name:e})};return(e,l)=>(_(),u("div",{class:t(e.$style.main)},[s("div",{class:t(["row",e.$style["main-visual"]])},[b,s("div",$,[s("div",null,[s("div",{class:t(e.$style.title)}," 숫자야구 ",2),s("div",{class:t(e.$style.desc)}," 아래 버튼을 선택하여 시작 ",2)])])],2),s("div",x,[i(c(r),{label:"싱글 플레이",onClick:l[0]||(l[0]=m=>a("SinglePlay"))}),i(c(r),{label:"멀티 플레이",onClick:l[1]||(l[1]=m=>a("MultiLobby"))})])],2))}}),k="_main_13zxl_1",z="_title_13zxl_8",B="_desc_13zxl_12",C={main:k,"main-visual":"_main-visual_13zxl_5",title:z,desc:B},h={$style:C},M=v(g,[["__cssModules",h]]);export{M as default};