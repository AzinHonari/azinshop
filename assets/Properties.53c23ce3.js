import{c as h}from"./states.15029e0f.js";import{_ as y,o as _,c as r,a as s,f as t,F as g,r as w,g as v,t as i,n as I,p as $,e as C}from"./entry.36bffc27.js";const q={class:"images"},x={class:"preview"},k=["src"],P={class:"image"},S=["src"],B={__name:"Media",props:["images"],setup(o){return(u,e)=>(_(),r("div",q,[s("div",x,[s("img",{src:`../../${("usePreviewImage"in u?u.usePreviewImage:t(h))().value}`},null,8,k)]),(_(!0),r(g,null,w(o.images,p=>(_(),r("div",P,[s("img",{src:`../../${p.url}`},null,8,S)]))),256))]))}},ls=y(B,[["__scopeId","data-v-ce5189f8"]]);const c=o=>($("data-v-3c103630"),o=o(),C(),o),z={class:"container"},M={class:"title"},R={class:"price"},A={class:"color"},D=c(()=>s("h3",null,"Color",-1)),E=["onClick"],F={class:"quantity"},j=c(()=>s("label",{for:"quantity"},"Quantity",-1)),L={class:"quantity-action"},N=["disabled"],Q=["v-model","value"],U=c(()=>s("div",{class:"action"},[s("button",null,"Add to cart"),s("button",null,"Buy it now")],-1)),V={class:"description"},G={class:"summary"},H={class:"section"},J=c(()=>s("div",{class:"title"},[s("span",{class:"icon-puzzle icon"}),s("h3",null,"Materials"),s("span",{class:"icon-keyboard_arrow_down arrow"})],-1)),K={class:"content"},O={class:"section"},T=c(()=>s("div",{class:"title"},[s("span",{class:"icon-truck icon"}),s("h3",null,"Shipping & Returns"),s("span",{class:"icon-keyboard_arrow_down arrow"})],-1)),W={class:"content"},X={class:"section"},Y=c(()=>s("div",{class:"title"},[s("span",{class:"icon-edit-cut icon"}),s("h3",null,"Dimensions"),s("span",{class:"icon-keyboard_arrow_down arrow"})],-1)),Z={class:"content"},ss={class:"section"},ts=c(()=>s("div",{class:"title"},[s("span",{class:"icon-heart icon"}),s("h3",null,"Care Instructions"),s("span",{class:"icon-keyboard_arrow_down arrow"})],-1)),es={class:"content"},os=c(()=>s("div",{class:"share"},[s("span",{class:"icon-share icon"}),s("span",null,"Share")],-1)),ns={__name:"Properties",props:["properties"],setup(o){const{properties:u}=o,e=u[0],p=v(e.color),m=v(e.price);h().value=e.images[0].url;const f=l=>{p.value=l.color,m.value=l.price,h().value=l.images[0].url},b=l=>{const n=[];return l.available||n.push("color-unavailable"),l.color===p.value&&n.push("color-active"),n.join(" ")},a=v(0);return(l,n)=>(_(),r("div",z,[s("h1",M,i(t(e).name),1),s("h2",R,i(`€${t(m)} EUR`),1),s("div",A,[D,s("ul",null,[(_(!0),r(g,null,w(o.properties,d=>(_(),r("li",{class:I(b(d)),onClick:is=>f(d)},i(d.color),11,E))),256))])]),s("div",F,[j,s("div",L,[s("button",{class:"minus-quantity",onClick:n[0]||(n[0]=d=>t(a)>0?a.value--:t(a)),disabled:!(t(a)>0)},"-",8,N),s("input",{id:"quantity",type:"text","v-model":t(a),value:t(a)},null,8,Q),s("button",{class:"add-quantity",onClick:n[1]||(n[1]=d=>a.value++)},"+")])]),U,s("div",V,[s("p",null,i(t(e).description),1)]),s("div",G,[s("div",H,[J,s("div",K,[s("p",null,i(t(e).materials),1)])]),s("div",O,[T,s("div",W,[s("p",null,i(t(e).shippingAndReturn),1)])]),s("div",X,[Y,s("div",Z,[s("p",null,i(t(e).dimensions),1)])]),s("div",ss,[ts,s("div",es,[s("p",null,i(t(e).careInstructions),1)])])]),os]))}},_s=y(ns,[["__scopeId","data-v-3c103630"]]);export{ls as _,_s as a};
