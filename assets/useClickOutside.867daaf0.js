import{D as r,E as s}from"./entry.36bffc27.js";async function f(n,t,u){if(!n)return;n.value;let e=async o=>{var i=!0;typeof u=="function"&&(i=await u()),i&&(o.target==n.value||o.composedPath().includes(n.value)||i&&typeof t=="function"&&t())};return r(()=>{window.addEventListener("click",e)}),s(()=>{window.removeEventListener("click",e)}),{listener:e}}export{f as u};
