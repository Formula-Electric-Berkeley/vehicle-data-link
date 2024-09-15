"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[7317],{68403:(L,g,s)=>{s.r(g),s.d(g,{plugin:()=>E});var F=s(65158),i=s(74848),v=s(41811),y=s(96540),P=s(96192),x=s(95511),N=s(48543);const U=({width:o,height:e,data:t,options:r})=>{const d=(0,P.JQ)(t.timeRange),l=(0,y.useId)();if(!t||!t.series.length)return(0,i.jsx)("div",{className:"panel-empty",children:(0,i.jsx)("p",{children:"No data found in response"})});const c=(0,v.A)(N.BR);return(0,i.jsx)("div",{style:{width:o,height:e},children:(0,i.jsx)(x.F,{dataFrames:c(t.series,r),getLinks:d,panelId:l})})};var j=s(32196),S=s(40845),C=s(83598),p=s(55852),G=s(76218);const A=({value:o,onChange:e,context:t})=>{const r=(0,S.of)(O),d=()=>{const a={field:"",color:""};e(o?[...o,a]:[a])},l=a=>{const n=o?.slice();n.splice(a,1),e(n)},c=(a,n,m)=>{let u=o?.slice()??[];u[a][n]=m,e(u)};return(0,i.jsxs)(i.Fragment,{children:[o?.map((a,n)=>(0,i.jsxs)("div",{className:r.section,children:[(0,i.jsx)(G.O,{context:t,value:a.field??"",onChange:m=>{c(n,"field",m)},item:{settings:{filter:m=>m.name.includes("arc__")},id:`arc-field-${n}`,name:`arc-field-${n}`}}),(0,i.jsx)(C.sk,{color:a.color||"#808080",onChange:m=>{c(n,"color",m)}}),(0,i.jsx)(p.$n,{size:"sm",icon:"minus",variant:"secondary",onClick:()=>l(n),title:"Remove arc"})]},n)),(0,i.jsx)(p.$n,{size:"sm",icon:"plus",onClick:d,variant:"secondary",children:"Add arc"})]})},O=()=>({section:(0,j.css)`
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0 8px;
      margin-bottom: 8px;
    `});var h=s(11261),z=s(47070),f=s(38824);class D{getListWithDefaults(e){return e.getListAppender({name:f.m.NodeGraph,pluginId:"nodeGraph"})}hasCorrectFields(e){let t=!1,r=!1;const d=[["id",h.PU.string],["title",h.PU.string],["mainstat",h.PU.number]],l=[["id",h.PU.string],["source",h.PU.string],["target",h.PU.string]];for(const c of e)this.checkFields(d,c)&&(t=!0),this.checkFields(l,c)&&(r=!0);return t&&r}checkFields(e,t){let r=!0;for(const d of e){const[l,c]=d,a=t.fields.find(n=>n.name===l);if(!a||c!==a.type){r=!1;break}}return r}getSuggestionsForData(e){if(!e.data)return;const t=this.hasCorrectFields(e.data.series),r=e.data.series.filter(d=>d.meta&&d.meta.preferredVisualisationType==="nodeGraph");(t||r.length===2)&&this.getListWithDefaults(e).append({name:f.m.NodeGraph,score:z.nQ.Best})}}const E=new F.m(U).setPanelOptions((o,e)=>{o.addNestedOptions({category:["Nodes"],path:"nodes",build:t=>{t.addUnitPicker({name:"Main stat unit",path:"mainStatUnit"}),t.addUnitPicker({name:"Secondary stat unit",path:"secondaryStatUnit"}),t.addCustomEditor({name:"Arc sections",path:"arcs",id:"arcs",editor:A})}}),o.addNestedOptions({category:["Edges"],path:"edges",build:t=>{t.addUnitPicker({name:"Main stat unit",path:"mainStatUnit"}),t.addUnitPicker({name:"Secondary stat unit",path:"secondaryStatUnit"})}})}).setSuggestionsSupplier(new D)}}]);

//# sourceMappingURL=nodeGraphPanel.19d6bc323a4471c7820e.js.map