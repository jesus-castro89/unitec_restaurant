import k from"./ProseH4.280361a6.js";import B from"./ProseCodeInline.9f9db0cd.js";import D from"./Badge.86d37c29.js";import q from"./ProseP.a119d57d.js";import{d as N,ar as b,I,b as o,c as r,F as j,ah as w,J as d,e as m,g as i,w as s,D as _,t as u,X as l,f as p,k as F}from"./entry.5f4cee70.js";import"./slot.7237bdcc.js";import"./node.676c5e99.js";const O={class:"component-playground-data-section"},E=["id"],H=["value","onChange"],J=N({__name:"ComponentPlaygroundProps",props:{modelValue:{type:Object,required:!0},componentData:{type:Object,required:!0}},emits:["update:modelValue"],setup(f,{emit:g}){const a=f,c=b(a,"modelValue",g),y=(t,n)=>{c.value={...c.value,[n]:t.target.value}},v=I(()=>{var t,n;return(n=(t=a==null?void 0:a.componentData)==null?void 0:t.meta)==null?void 0:n.props});return(t,n)=>{const x=k,h=B,C=D,P=q;return o(),r("div",O,[(o(!0),r(j,null,w(d(v),e=>(o(),r("div",{key:e.name},[m("div",{id:e.name,class:"prop-title"},[i(x,{id:e.name},{default:s(()=>[_(u(e.name),1)]),_:2},1032,["id"]),m("span",null,[i(h,null,{default:s(()=>[_(u(e.type),1)]),_:2},1024),e.required?p("",!0):(o(),l(C,{key:0},{default:s(()=>[_(" Required ")]),_:1}))])],8,E),e.description?(o(),l(P,{key:0},{default:s(()=>[_(u(e.description),1)]),_:2},1024)):p("",!0),m("input",{value:d(c)[e.name],onChange:V=>y(V,e.name)},null,40,H)]))),128))])}}});const A=F(J,[["__scopeId","data-v-c7e4343c"]]);export{A as default};