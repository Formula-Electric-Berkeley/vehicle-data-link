"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[8516],{45434:(y,r,a)=>{a.r(r),a.d(r,{LibraryPanelsPage:()=>_,default:()=>M});var n=a(74848),O=a(96540),i=a(69444),h=a(16678),t=a(24643);const _=()=>{const[c,l]=(0,O.useState)(void 0);return(0,n.jsx)(i.Y,{navId:"dashboards/library-panels",children:(0,n.jsxs)(i.Y.Contents,{children:[(0,n.jsx)(h.j,{onClick:l,showSecondaryActions:!0,showSort:!0,showPanelFilter:!0,showFolderFilter:!0}),c?(0,n.jsx)(t.F,{onDismiss:()=>l(void 0),libraryPanel:c}):null]})})},M=_},24643:(y,r,a)=>{a.d(r,{F:()=>g});var n=a(74848),O=a(32196),i=a(76459),h=a.n(i),t=a(96540),_=a(76885),M=a(39601),c=a(40845),l=a(37390),f=a(90182),p=a(55852),s=a(8484),C=a(57767);function g({libraryPanel:o,onDismiss:d}){const E=(0,c.of)(b),[v,D]=(0,t.useState)(!1),[e,A]=(0,t.useState)(0),[P,B]=(0,t.useState)(void 0);(0,t.useEffect)(()=>{(async()=>{const T=await(0,C.GN)(o.uid);A(T.length)})()},[o.uid]);const L=(0,t.useCallback)(u=>m(o.uid,u,D),[o.uid]),K=(0,t.useMemo)(()=>h()(L,300,{leading:!0}),[L]),x=u=>{u.preventDefault(),M.Ny.push(_.kM.renderUrl(`/d/${P?.value?.uid}`,{}))};return(0,n.jsxs)(l.a,{title:(0,s.t)("library-panels.modal.title","View panel in dashboard"),onDismiss:d,onClickBackdrop:d,isOpen:!0,children:[(0,n.jsxs)("div",{className:E.container,children:[e===0?(0,n.jsx)("span",{children:(0,n.jsx)(s.x6,{i18nKey:"library-panels.modal.panel-not-linked",children:"Panel is not linked to a dashboard. Add the panel to a dashboard and retry."})}):null,e>0?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("p",{children:(0,n.jsxs)(s.x6,{i18nKey:"library-panels.modal.body",count:e,children:["This panel is being used in ",{count:e}," dashboard. Please choose which dashboard to view the panel in:"]})}),(0,n.jsx)(f.DW,{isClearable:!0,isLoading:v,defaultOptions:!0,loadOptions:K,onChange:B,placeholder:(0,s.t)("library-panels.modal.select-placeholder","Start typing to search for dashboard"),noOptionsMessage:(0,s.t)("library-panels.modal.select-no-options-message","No dashboards found")})]}):null]}),(0,n.jsxs)(l.a.ButtonRow,{children:[(0,n.jsx)(p.$n,{variant:"secondary",onClick:d,fill:"outline",children:(0,n.jsx)(s.x6,{i18nKey:"library-panels.modal.button-cancel",children:"Cancel"})}),(0,n.jsx)(p.$n,{onClick:x,disabled:!P,children:P?(0,s.t)("library-panels.modal.button-view-panel1","View panel in {{label}}...",{label:P?.label}):(0,s.t)("library-panels.modal.button-view-panel2","View panel in dashboard...")})]})]})}async function m(o,d,E){E(!0);const D=(await(0,C.xV)(o)).filter(e=>e.title.toLowerCase().includes(d.toLowerCase())).map(e=>({label:e.title,value:e}));return E(!1),D}function b(o){return{container:(0,O.css)``}}}}]);

//# sourceMappingURL=LibraryPanelsPage.293c7c6845319c1e3894.js.map