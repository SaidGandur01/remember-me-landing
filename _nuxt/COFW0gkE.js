import{E as f,r as u,F as o,G as d,H as v,f as l,I as i,J as h,K as m}from"./CFQLcD_0.js";function U(t,a={}){const e=a.head||f();if(e)return e.ssr?e.push(t,a):p(e,t,a)}function p(t,a,e={}){const s=u(!1),n=u({});o(()=>{n.value=s.value?{}:m(a)});const r=t.push(n.value,e);return d(n,c=>{r.patch(c)}),v()&&(l(()=>{r.dispose()}),i(()=>{s.value=!0}),h(()=>{s.value=!1})),r}export{U as u};
