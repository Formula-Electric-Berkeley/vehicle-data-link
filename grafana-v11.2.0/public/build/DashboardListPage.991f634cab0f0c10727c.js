"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[152],{2471:(ne,F,t)=>{t.r(F),t.d(F,{default:()=>mt});var e=t(74848),u=t(32196),n=t(96540),x=t(24180),L=t(70713),m=t(14110),i=t(40845),D=t(67647),M=t(69444),S=t(31678),P=t(71101),E=t(39788),d=t(8484);function b(s=!1){return s?(0,d.t)("search.search-input.include-panels-placeholder","Search for dashboards, folders, and panels"):(0,d.t)("search.search-input.placeholder","Search for dashboards and folders")}function A(){return(0,d.t)("search.dashboard-actions.new-dashboard","New dashboard")}function T(){return(0,d.t)("search.dashboard-actions.new-folder","New folder")}function c(){return(0,d.t)("search.dashboard-actions.import","Import")}function I(){return(0,d.t)("search.dashboard-actions.new","New")}var a=t(55314),f=t(32264),v=t(55852),K=t(67061),U=t(56034),Q=t(28138),J=t(28444),j=t(37690),X=t(18241),re=t(51887);function q(){const s=(0,S.useDispatch)(),o=(0,j.xK)(),[g]=(0,a.uz)(),[l]=(0,a.wt)(),[,r]=(0,E.ET)(),h=(0,n.useMemo)(()=>!f.$.featureToggles.nestedFolders&&Object.values(o.folder).some(V=>V),[o]),y=r.hasSearchFilters(),O=()=>{s((0,j.cT)({isSelected:!1,folderUID:void 0})),y&&r.doSearchWithDebounce()},p=async()=>{await g({selectedItems:o}),R("delete",o),O()},C=async V=>{await l({selectedItems:o,destinationUID:V}),R("move",o),O()},w=()=>{Q.A.publish(new J.S8({component:re.J,props:{selectedItems:o,onConfirm:C}}))},B=()=>{Q.A.publish(new J.S8({component:X.T,props:{selectedItems:o,onConfirm:p}}))},$=(0,e.jsx)(v.$n,{onClick:w,variant:"secondary",disabled:h,children:(0,e.jsx)(d.x6,{i18nKey:"browse-dashboards.action.move-button",children:"Move"})});return(0,e.jsxs)(K.B,{gap:1,"data-testid":"manage-actions",children:[h?(0,e.jsx)(U.m,{content:(0,d.t)("browse-dashboards.action.cannot-move-folders","Folders cannot be moved"),children:$}):$,(0,e.jsx)(v.$n,{onClick:B,variant:"destructive",children:(0,e.jsx)(d.x6,{i18nKey:"browse-dashboards.action.delete-button",children:"Delete"})})]})}const ee={move:"grafana_manage_dashboards_item_moved",delete:"grafana_manage_dashboards_item_deleted"};function R(s,o){const g=Object.keys(o.dashboard).filter(r=>o.dashboard[r]),l=Object.keys(o.folder).filter(r=>o.folder[r]);(0,m.rR)(ee[s],{item_counts:{folder:l.length,dashboard:g.length},source:"tree_actions",restore_enabled:f.$.featureToggles.dashboardRestoreUI})}var H=t(19519),te=t(24439);function ue(){const[s,o]=(0,E.ET)();return(0,e.jsx)(H.bj,{showStarredFilter:!0,showLayout:!0,state:s,getTagOptions:o.getTagOptions,getSortOptions:(0,te.getGrafanaSearcher)().getSortOptions,sortPlaceholder:(0,te.getGrafanaSearcher)().sortPlaceholder,onLayoutChange:o.onLayoutChange,onStarredFilterChange:o.onStarredFilterChange,onSortChange:o.onSortChange,onTagFilterChange:o.onTagFilterChange,onDatasourceChange:o.onDatasourceChange,onPanelTypeChange:o.onPanelTypeChange,onSetIncludePanels:o.onSetIncludePanels})}var ge=t(69529),fe=t(72109),me=t(76442),ve=t(92955),N=(s=>(s[s.Unselected=0]="Unselected",s[s.Selected=1]="Selected",s[s.Mixed=2]="Mixed",s))(N||{}),Ee=t(32885),se=t(91793),De=t(10022),We=t(39070),ie=t(13544),Pe=t(10880),Ce=t(49952);function Fe({row:{original:s},isSelected:o,onItemSelectionChange:g}){const l=s.item;if(!o)return(0,e.jsx)(xe,{});if(l.kind==="ui")return l.uiKind==="pagination-placeholder"?(0,e.jsx)(Pe.S,{disabled:!0,value:!1}):(0,e.jsx)(xe,{});if((0,Ce.I)(l.uid))return(0,e.jsx)(xe,{});const r=o(l);return(0,e.jsx)(Pe.S,{"data-testid":ie.Tp.pages.BrowseDashboards.table.checkbox(l.uid),"aria-label":(0,d.t)("browse-dashboards.dashboards-tree.select-checkbox","Select"),value:r===N.Selected,indeterminate:r===N.Mixed,onChange:h=>g?.(l,h.currentTarget.checked)})}function xe(){const s=(0,i.of)(Ne);return(0,e.jsx)("span",{className:s.checkboxSpacer})}const Ne=s=>({checkboxSpacer:(0,u.css)({paddingLeft:s.spacing(2)})});function we({isSelected:s,onAllSelectionChange:o}){const g=s?.("$all")??N.Unselected;return(0,e.jsx)(Pe.S,{value:g===N.Selected,indeterminate:g===N.Mixed,"aria-label":(0,d.t)("browse-dashboards.dashboards-tree.select-all-header-checkbox","Select all"),onChange:l=>{g===N.Mixed?o?.(!1):o?.(l.currentTarget.checked)}})}var $e=t(70255),Oe=t(94753),Ve=t(29158),ze=t(62930),Te=t(14578),He=t(50720),Ie=t(78318),Qe=t(40957),je=t(18759);const Me="md",Ae="sm";function Ge({row:{original:s},onFolderClick:o,treeID:g}){const l=(0,i.of)(Ye),{item:r,level:h,isOpen:y}=s,O=(0,j.V6)(),p=y&&!O[r.uid],C=(0,Qe.cu)(s.item,y);return r.kind==="ui"?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(je.T,{level:h,spacing:{xs:1,md:3}}),(0,e.jsx)("span",{className:l.folderButtonSpacer}),r.uiKind==="empty-folder"?(0,e.jsx)("em",{className:l.emptyText,children:(0,e.jsx)(Oe.E,{variant:"body",color:"secondary",truncate:!0,children:"No items"})}):(0,e.jsx)($e.A,{width:200})]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(je.T,{level:h,spacing:{xs:1,md:3}}),r.kind==="folder"?(0,e.jsx)(Ve.K,{size:Me,className:l.chevron,onClick:()=>{o(r.uid,!y)},name:y?"angle-down":"angle-right","aria-label":y?(0,d.t)("browse-dashboards.dashboards-tree.collapse-folder-button","Collapse folder {{title}}",{title:r.title}):(0,d.t)("browse-dashboards.dashboards-tree.expand-folder-button","Expand folder {{title}}",{title:r.title})}):(0,e.jsx)("span",{className:l.folderButtonSpacer}),(0,e.jsxs)("div",{className:l.iconNameContainer,children:[p?(0,e.jsx)(ze.y,{size:Ae}):(0,e.jsx)(Te.I,{size:Ae,name:C}),(0,e.jsx)(Oe.E,{variant:"body",truncate:!0,id:g&&(0,Ce.e)(g,r),children:r.url?(0,e.jsx)(He.N,{onClick:()=>{(0,m.rR)("manage_dashboards_result_clicked")},href:r.url,className:l.link,children:r.title}):r.title})]})]})}const Ye=s=>({chevron:(0,u.css)({marginRight:s.spacing(1),width:(0,Ie.cs)(Me)}),emptyText:(0,u.css)({overflow:"hidden"}),folderButtonSpacer:(0,u.css)({paddingLeft:`calc(${(0,Ie.cs)(Me)}px + ${s.spacing(1)})`}),iconNameContainer:(0,u.css)({alignItems:"center",display:"flex",gap:s.spacing(1),overflow:"hidden"}),link:(0,u.css)({"&:hover":{textDecoration:"underline"}})});var _e=t(64149);function Ze({row:{original:s}}){const o=(0,i.of)(Je),g=s.item;return g.kind==="ui"?g.uiKind==="pagination-placeholder"?(0,e.jsx)(_e.L.Skeleton,{}):null:g.tags?(0,e.jsx)(_e.L,{className:o.tagList,tags:g.tags}):null}function Je(s){return{tagList:(0,u.css)({justifyContent:"flex-start",flexWrap:"nowrap"})}}var Xe=t(37811);const Le=36,ye=36,ke=0;function qe({items:s,width:o,height:g,isSelected:l,onFolderClick:r,onAllSelectionChange:h,onItemSelectionChange:y,isItemLoaded:O,requestLoadMore:p,canSelect:C=!1}){const w=(0,n.useId)(),B=(0,n.useRef)(null),$=(0,n.useRef)(null),V=(0,i.of)(Re);(0,n.useEffect)(()=>{B.current&&B.current.resetloadMoreItemsCache(!0),$.current&&$.current.resetAfterIndex(0)},[s]);const _=(0,n.useMemo)(()=>{const z={id:"checkbox",width:0,Header:we,Cell:Fe},k={id:"name",width:3,Header:(0,e.jsx)("span",{style:{paddingLeft:24},children:(0,e.jsx)(d.x6,{i18nKey:"browse-dashboards.dashboards-tree.name-column",children:"Name"})}),Cell:be=>(0,e.jsx)(Ge,{...be,onFolderClick:r})},oe={id:"tags",width:2,Header:(0,d.t)("browse-dashboards.dashboards-tree.tags-column","Tags"),Cell:Ze};return[C&&z,k,oe].filter(We.zz)},[r,C]),W=(0,Ee.useTable)({columns:_,data:s},Xe.A),{getTableProps:Y,getTableBodyProps:ae,headerGroups:le}=W,ce=(0,n.useMemo)(()=>({table:W,isSelected:l,onAllSelectionChange:h,onItemSelectionChange:y,treeID:w}),[W,l,h,y,s,w]),G=(0,n.useCallback)(z=>O(z),[O]),Z=(0,n.useCallback)((z,k)=>{const{parentUID:oe}=s[z];p(oe)},[p,s]),he=(0,n.useCallback)(z=>{const k=s[z];return k.item.kind==="ui"&&k.item.uiKind==="divider"?ke:ye},[s]);return(0,e.jsxs)("div",{...Y(),role:"table",children:[le.map(z=>{const{key:k,...oe}=z.getHeaderGroupProps({style:{width:o}});return(0,e.jsx)("div",{...oe,className:(0,u.cx)(V.row,V.headerRow),children:z.headers.map(Se=>{const{key:be,...vt}=Se.getHeaderProps();return(0,e.jsx)("div",{...vt,role:"columnheader",className:V.cell,children:Se.render("Header",{isSelected:l,onAllSelectionChange:h})},be)})},k)}),(0,e.jsx)("div",{...ae(),"data-testid":ie.Tp.pages.BrowseDashboards.table.body,children:(0,e.jsx)(De.A,{ref:B,itemCount:s.length,isItemLoaded:G,loadMoreItems:Z,children:({onItemsRendered:z,ref:k})=>(0,e.jsx)(se._m,{ref:oe=>{k(oe),$.current=oe},height:g-Le,width:o,itemCount:s.length,itemData:ce,estimatedItemSize:ye,itemSize:he,onItemsRendered:z,children:et})})})]})}function et({index:s,style:o,data:g}){const l=(0,i.of)(Re),{table:r,isSelected:h,onItemSelectionChange:y,treeID:O}=g,{rows:p,prepareRow:C}=r,w=p[s];C(w);const B=w.original.item,{key:$,...V}=w.getRowProps({style:o});return B.kind==="ui"&&B.uiKind==="divider"?(0,e.jsx)("div",{...V,children:(0,e.jsx)("hr",{className:l.divider})},$):(0,e.jsx)("div",{...V,className:(0,u.cx)(l.row,l.bodyRow),"aria-labelledby":(0,Ce.e)(O,B),"data-testid":ie.Tp.pages.BrowseDashboards.table.row("title"in B?B.title:B.uid),children:w.cells.map(_=>{const{key:W,...Y}=_.getCellProps();return(0,e.jsx)("div",{...Y,className:l.cell,children:_.render("Cell",{isSelected:h,onItemSelectionChange:y,treeID:O})},W)})},$)}const Re=s=>({row:(0,u.css)({gap:s.spacing(1)}),divider:(0,u.css)({borderTop:`1px solid ${s.colors.border.weak}`,width:"100%",margin:0}),headerRow:(0,u.css)({backgroundColor:s.colors.background.secondary,height:Le}),bodyRow:(0,u.css)({height:ye,"&:hover":{backgroundColor:s.colors.emphasize(s.colors.background.primary,.03)}}),cell:(0,u.css)({padding:s.spacing(1),overflow:"hidden",display:"flex",alignItems:"center"}),link:(0,u.css)({"&:hover":{textDecoration:"underline"}})});function tt({folderUID:s,width:o,height:g,canSelect:l}){const r=(0,j.eC)(s),h=(0,S.useDispatch)(),y=(0,j.q0)(s),O=(0,j.Ms)(),p=(0,j.V6)(),C=(0,n.useCallback)((_,W)=>{h((0,j.wn)({folderUID:_,isOpen:W})),W&&h((0,j.Ii)({parentUID:_,pageSize:ve.md}))},[h]),w=(0,n.useCallback)((_,W)=>{h((0,j.t$)({item:_,isSelected:W}))},[h]),B=(0,n.useCallback)(_=>{if(_==="$all"){if(O.$all)return N.Selected;for(const ae of Object.values(O))if(typeof ae!="boolean"){for(const le in ae)if(ae[le])return N.Mixed}return N.Unselected}return O[_.kind][_.uid]?N.Selected:Be(_,p,O)?N.Mixed:N.Unselected},[O,p]),$=(0,n.useCallback)(_=>{const W=y[_];if(!W)return!1;const Y=W.item;return!(Y.kind==="ui"&&Y.uiKind==="pagination-placeholder")},[y]),V=(0,j.Zg)();return r==="fulfilled"&&y.length===0?(0,e.jsx)("div",{style:{width:o},children:l?(0,e.jsx)(ge.p,{variant:"call-to-action",button:(0,e.jsx)(v.z9,{href:s?`dashboard/new?folderUid=${s}`:"dashboard/new",icon:"plus",size:"lg",children:(0,e.jsx)(d.x6,{i18nKey:"browse-dashboards.empty-state.button-title",children:"Create dashboard"})}),message:s?(0,d.t)("browse-dashboards.empty-state.title-folder","This folder doesn't have any dashboards yet"):(0,d.t)("browse-dashboards.empty-state.title","You haven't created any dashboards yet"),children:s&&(0,e.jsxs)(d.x6,{i18nKey:"browse-dashboards.empty-state.pro-tip",children:["Add/move dashboards to your folder at"," ",(0,e.jsx)(fe.Y,{external:!1,href:"/dashboards",children:"Browse dashboards"})]})}):(0,e.jsx)(me.c,{callToActionElement:(0,e.jsx)("span",{children:"This folder is empty"})})}):(0,e.jsx)(qe,{canSelect:l,items:y,width:o,height:g,isSelected:B,onFolderClick:C,onAllSelectionChange:_=>h((0,j.cT)({isSelected:_,folderUID:s})),onItemSelectionChange:w,isItemLoaded:$,requestLoadMore:V})}function Be(s,o,g){const l=o[s.uid];return l?l.items.some(r=>{const h=g[r.kind][r.uid];return h||Be(r,o,g)}):!1}var st=t(38138),pe=t(64539),at=t(83122),ot=t(87978),nt=t(49785),rt=t(88575),lt=t(10354),it=t(71500);const Ke={folderName:""};function dt({onCancel:s,onConfirm:o}){const{handleSubmit:g,register:l,formState:{errors:r}}=(0,nt.mN)({defaultValues:Ke}),h=(0,d.t)("browse-dashboards.action.new-folder-name-required-phrase","Folder name is required."),y=async p=>{try{return await it.P.validateNewFolderName(p),!0}catch(C){if(C instanceof Error)return C.message;throw C}},O=(0,d.t)("browse-dashboards.new-folder-form.name-label","Folder name");return(0,e.jsxs)("form",{name:"addFolder",onSubmit:g(p=>o(p.folderName)),"data-testid":ie.Tp.pages.BrowseDashboards.NewFolderForm.form,children:[(0,e.jsx)(rt.D,{label:O,invalid:!!r.folderName,error:r.folderName&&r.folderName.message,children:(0,e.jsx)(lt.p,{"data-testid":ie.Tp.pages.BrowseDashboards.NewFolderForm.nameInput,id:"folder-name-input",defaultValue:Ke.folderName,...l("folderName",{required:h,validate:async p=>await y(p)})})}),(0,e.jsxs)(K.B,{children:[(0,e.jsx)(v.$n,{variant:"secondary",fill:"outline",onClick:s,children:(0,e.jsx)(d.x6,{i18nKey:"browse-dashboards.new-folder-form.cancel-label",children:"Cancel"})}),(0,e.jsx)(v.$n,{type:"submit",children:(0,e.jsx)(d.x6,{i18nKey:"browse-dashboards.new-folder-form.create-label",children:"Create"})})]})]})}function ct({parentFolder:s,canCreateDashboard:o,canCreateFolder:g}){const[l,r]=(0,n.useState)(!1),h=(0,x.zy)(),[y]=(0,a.Vc)(),[O,p]=(0,n.useState)(!1),C=async B=>{try{await y({title:B,parentUid:s?.uid});const $=s?.parents?s.parents.length+1:0;(0,m.rR)("grafana_manage_dashboards_folder_created",{is_subfolder:!!s?.uid,folder_depth:$})}finally{p(!1)}},w=(0,e.jsxs)(st.W,{children:[o&&(0,e.jsx)(pe.D,{label:A(),onClick:()=>(0,m.rR)("grafana_menu_item_clicked",{url:de("/dashboard/new",s?.uid),from:h.pathname}),url:de("/dashboard/new",s?.uid)}),g&&(0,e.jsx)(pe.D,{onClick:()=>p(!0),label:T()}),o&&(0,e.jsx)(pe.D,{label:c(),onClick:()=>(0,m.rR)("grafana_menu_item_clicked",{url:de("/dashboard/import",s?.uid),from:h.pathname}),url:de("/dashboard/import",s?.uid)})]});return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(at.m,{overlay:w,onVisibleChange:r,children:(0,e.jsxs)(v.$n,{children:[I(),(0,e.jsx)(Te.I,{name:l?"angle-up":"angle-down"})]})}),O&&(0,e.jsx)(ot._,{title:T(),subtitle:s?.title?`Location: ${s.title}`:void 0,onClose:()=>p(!1),size:"sm",children:(0,e.jsx)(dt,{onConfirm:C,onCancel:()=>p(!1)})})]})}function de(s,o){const g=o?s+"?folderUid="+o:s;return f.$.appSubUrl?f.$.appSubUrl+g:g}var ht=t(9134),ut=t(2960),gt=t(49904);const Ue=(0,n.memo)(({match:s})=>{const{uid:o}=s.params,g=(0,S.useDispatch)(),l=(0,i.of)(ft),[r,h]=(0,E.ET)(),y=h.hasSearchFilters(),O=(0,x.zy)(),p=(0,n.useMemo)(()=>new URLSearchParams(O.search),[O.search]);(0,n.useEffect)(()=>{h.initStateFromUrl(o),g((0,j.cT)({isSelected:!1,folderUID:void 0}))},[g,o,h]),(0,n.useEffect)(()=>{h.onSetStarred(p.has("starred"))},[p,h]),(0,n.useEffect)(()=>{!y&&r.result&&h.setState({result:void 0,includePanels:void 0})},[y,r.result,h]);const{data:C}=(0,a.kH)(o??a.hT),[w]=(0,a.iB)(),B=(0,n.useMemo)(()=>{if(!C)return;const G=(0,P.R4)(C),Z=(0,P.Cg)(C.uid),he=G.children?.find(z=>z.id===Z);return he&&(he.active=!0),G},[C]),$=(0,j.QE)(),{canEditFolders:V,canEditDashboards:_,canCreateDashboards:W,canCreateFolders:Y}=(0,gt.N)(C),ae=V&&o,le=V||_,ce=async G=>{if(C){const Z=await w({...C,title:G});if("error"in Z)throw(0,m.rR)("grafana_browse_dashboards_page_edit_folder_name",{status:"failed_with_error",error:Z.error}),Z.error;(0,m.rR)("grafana_browse_dashboards_page_edit_folder_name",{status:"success"})}else(0,m.rR)("grafana_browse_dashboards_page_edit_folder_name",{status:"failed_no_folderDTO"})};return(0,e.jsx)(M.Y,{navId:"dashboards/browse",pageNav:B,onEditTitle:ae?ce:void 0,actions:(0,e.jsxs)(e.Fragment,{children:[C&&(0,e.jsx)(ht.m,{folder:C}),(W||Y)&&(0,e.jsx)(ct,{parentFolder:C,canCreateDashboard:W,canCreateFolder:Y})]}),children:(0,e.jsxs)(M.Y.Contents,{className:l.pageContents,children:[(0,e.jsx)("div",{children:(0,e.jsx)(D.Z,{placeholder:b(r.includePanels),value:r.query,escapeRegex:!1,onChange:G=>h.onQueryChange(G)})}),$?(0,e.jsx)(q,{}):(0,e.jsx)("div",{className:l.filters,children:(0,e.jsx)(ue,{})}),(0,e.jsx)("div",{className:l.subView,children:(0,e.jsx)(L.Ay,{children:({width:G,height:Z})=>y?(0,e.jsx)(ut.Q,{canSelect:le,width:G,height:Z,searchState:r,searchStateManager:h}):(0,e.jsx)(tt,{canSelect:le,width:G,height:Z,folderUID:o})})})]})})}),ft=s=>({pageContents:(0,u.css)({display:"flex",flexDirection:"column",gap:s.spacing(1),height:"100%"}),subView:(0,u.css)({height:"100%"}),filters:(0,u.css)({display:"none",[s.breakpoints.up("md")]:{display:"block"}})});Ue.displayName="BrowseDashboardsPage";const mt=Ue},18241:(ne,F,t)=>{t.d(F,{T:()=>P});var e=t(74848),u=t(96540),n=t(32264),x=t(96374),L=t(94753),m=t(68402),i=t(42418),D=t(8484),M=t(55314),S=t(43907);const P=({onConfirm:E,onDismiss:d,selectedItems:b,...A})=>{const{data:T}=(0,M.G2)(b),c=!!(T&&(T.alertRule||T.libraryPanel)),[I,a]=(0,u.useState)(!1),f=async()=>{a(!0);try{await E(),a(!1),d()}catch{a(!1)}};return(0,e.jsx)(x.u,{body:(0,e.jsxs)(e.Fragment,{children:[n.$.featureToggles.dashboardRestore&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(L.E,{element:"p",children:(0,e.jsx)(D.x6,{i18nKey:"browse-dashboards.action.delete-modal-restore-dashboards-text",children:"This action will delete the selected folders immediately but the selected dashboards will be marked for deletion in 30 days. Your organization administrator can restore the dashboards anytime before the 30 days expire. Folders cannot be restored."})}),(0,e.jsx)(m.$,{v:2})]}),(0,e.jsx)(L.E,{element:"p",children:(0,e.jsx)(D.x6,{i18nKey:"browse-dashboards.action.delete-modal-text",children:"This action will delete the following content:"})}),(0,e.jsx)(S.x,{selectedItems:b}),(0,e.jsx)(m.$,{v:2})]}),description:(0,e.jsx)(e.Fragment,{children:c?(0,e.jsx)(i.F,{severity:"warning",title:(0,D.t)("browse-dashboards.action.delete-modal-invalid-title","Cannot delete folder"),children:(0,e.jsx)(D.x6,{i18nKey:"browse-dashboards.action.delete-modal-invalid-text",children:"One or more folders contain library panels or alert rules. Delete these first in order to proceed."})}):null}),confirmationText:(0,D.t)("browse-dashboards.action.confirmation-text","Delete"),confirmText:I?(0,D.t)("browse-dashboards.action.deleting","Deleting..."):(0,D.t)("browse-dashboards.action.delete-button","Delete"),onDismiss:d,onConfirm:f,title:(0,D.t)("browse-dashboards.action.delete-modal-title","Delete"),...A,disabled:c})}},51887:(ne,F,t)=>{t.d(F,{J:()=>E});var e=t(74848),u=t(96540),n=t(37390),x=t(42418),L=t(94753),m=t(68402),i=t(88575),D=t(55852),M=t(36607),S=t(8484),P=t(43907);const E=({onConfirm:d,onDismiss:b,selectedItems:A,...T})=>{const[c,I]=(0,u.useState)(),[a,f]=(0,u.useState)(!1),v=Object.keys(A.folder).filter(U=>A.folder[U]),K=async()=>{if(c!==void 0){f(!0);try{await d(c),f(!1),b()}catch{f(!1)}}};return(0,e.jsxs)(n.a,{title:(0,S.t)("browse-dashboards.action.move-modal-title","Move"),onDismiss:b,...T,children:[v.length>0&&(0,e.jsx)(x.F,{severity:"info",title:(0,S.t)("browse-dashboards.action.move-modal-alert","Moving this item may change its permissions.")}),(0,e.jsx)(L.E,{element:"p",children:(0,e.jsx)(S.x6,{i18nKey:"browse-dashboards.action.move-modal-text",children:"This action will move the following content:"})}),(0,e.jsx)(P.x,{selectedItems:A}),(0,e.jsx)(m.$,{v:3}),(0,e.jsx)(i.D,{label:(0,S.t)("browse-dashboards.action.move-modal-field-label","Folder name"),children:(0,e.jsx)(M.d,{value:c,excludeUIDs:v,onChange:I})}),(0,e.jsxs)(n.a.ButtonRow,{children:[(0,e.jsx)(D.$n,{onClick:b,variant:"secondary",fill:"outline",children:(0,e.jsx)(S.x6,{i18nKey:"browse-dashboards.action.cancel-button",children:"Cancel"})}),(0,e.jsx)(D.$n,{disabled:c===void 0||a,onClick:K,variant:"primary",children:a?(0,S.t)("browse-dashboards.action.moving","Moving..."):(0,S.t)("browse-dashboards.action.move-button","Move")})]})]})}},9134:(ne,F,t)=>{t.d(F,{m:()=>f});var e=t(74848),u=t(96540),n=t(32264),x=t(14110),L=t(39601),m=t(38138),i=t(64539),D=t(83122),M=t(55852),S=t(14578),P=t(87978),E=t(52487),d=t(10096),b=t(8484),A=t(28444),T=t(55314),c=t(49904),I=t(18241),a=t(51887);function f({folder:v}){const[K,U]=(0,u.useState)(!1),[Q,J]=(0,u.useState)(!1),[j]=(0,T.aF)(),[X]=(0,T.Ko)(),{canEditFolders:re,canDeleteFolders:q,canViewPermissions:ee,canSetPermissions:R}=(0,c.N)(v),H=n.$.featureToggles.nestedFolders&&re,te=async se=>{await j({folder:v,destinationUID:se}),(0,x.rR)("grafana_manage_dashboards_item_moved",{item_counts:{folder:1,dashboard:0},source:"folder_actions"})},ue=async()=>{await X(v),(0,x.rR)("grafana_manage_dashboards_item_deleted",{item_counts:{folder:1,dashboard:0},source:"folder_actions"});const{parents:se}=v,De=se&&se.length?se[se.length-1].url:"/dashboards";L.Ny.push(De)},ge=()=>{d.lE.publish(new A.S8({component:a.J,props:{selectedItems:{folder:{[v.uid]:!0},dashboard:{},panel:{},$all:!1},onConfirm:te}}))},fe=()=>{d.lE.publish(new A.S8({component:I.T,props:{selectedItems:{folder:{[v.uid]:!0},dashboard:{},panel:{},$all:!1},onConfirm:ue}}))},me=(0,b.t)("browse-dashboards.folder-actions-button.manage-permissions","Manage permissions"),ve=(0,b.t)("browse-dashboards.folder-actions-button.move","Move"),N=(0,b.t)("browse-dashboards.folder-actions-button.delete","Delete"),Ee=(0,e.jsxs)(m.W,{children:[ee&&(0,e.jsx)(i.D,{onClick:()=>J(!0),label:me}),H&&(0,e.jsx)(i.D,{onClick:ge,label:ve}),q&&(0,e.jsx)(i.D,{destructive:!0,onClick:fe,label:N})]});return!ee&&!H&&!q?null:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(D.m,{overlay:Ee,onVisibleChange:U,children:(0,e.jsxs)(M.$n,{variant:"secondary",children:[(0,e.jsx)(b.x6,{i18nKey:"browse-dashboards.folder-actions-button.folder-actions",children:"Folder actions"}),(0,e.jsx)(S.I,{name:K?"angle-up":"angle-down"})]})}),Q&&(0,e.jsx)(P._,{title:(0,b.t)("browse-dashboards.action.manage-permissions-button","Manage permissions"),subtitle:v.title,onClose:()=>J(!1),size:"md",children:(0,e.jsx)(E.x,{resource:"folders",resourceId:v.uid,canSetPermissions:R})})]})}},2960:(ne,F,t)=>{t.d(F,{Q:()=>b});var e=t(74848),u=t(96540),n=t(78368),x=t(14236),L=t(69529),m=t(55852),i=t(8484),D=t(97427),M=t(66359),S=t(31678),P=t(37690);const E=25,d={view:new n.R((0,x.Vc)({fields:[{name:"uid",display:!0,values:Array(E).fill(null)},{name:"kind",display:!0,values:Array(E).fill("dashboard")},{name:"name",display:!0,values:Array(E).fill("")},{name:"location",display:!0,values:Array(E).fill("")},{name:"tags",display:!0,values:Array(E).fill([])}],meta:{custom:{locationInfo:[]}}})),loadMoreItems:()=>Promise.resolve(),isItemLoaded:()=>!1,totalRows:E};function b({width:T,height:c,canSelect:I,searchState:a,searchStateManager:f,emptyState:v}){const K=(0,S.useDispatch)(),U=(0,S.useSelector)(R=>R.browseDashboards.selectedItems),Q=(0,P.QE)(),{keyboardEvents:J}=(0,D.d)(),j=a.result??d,X=(0,u.useCallback)((R,H)=>R?R==="*"&&H==="*"?Q:R==="*"?!1:U[A(R)][H]??!1:!1,[U,Q]),re=(0,u.useCallback)(()=>{K((0,P.cT)({isSelected:!1,folderUID:void 0}))},[K]),q=(0,u.useCallback)((R,H)=>{const te=!X(R,H);K((0,P.t$)({item:{kind:A(R),uid:H},isSelected:te}))},[X,K]);if(j.totalRows===0){const R=v??(0,e.jsx)(L.p,{button:(0,e.jsx)(m.$n,{variant:"secondary",onClick:f.onClearSearchAndFilters,children:(0,e.jsx)(i.x6,{i18nKey:"browse-dashboards.no-results.clear",children:"Clear search and filters"})}),message:(0,i.t)("browse-dashboards.no-results.text","No results found for your query"),variant:"not-found",role:"alert"});return(0,e.jsx)("div",{style:{width:T},children:R})}const ee={response:j,selection:I?X:void 0,selectionToggle:I?q:void 0,clearSelection:re,width:T,height:c,onTagSelected:f.onAddTag,keyboardEvents:J,onDatasourceChange:a.datasource?f.onDatasourceChange:void 0,onClickItem:f.onSearchItemClicked};return(0,e.jsx)(M.P,{...ee})}function A(T){switch(T){case"folder":return"folder";case"dashboard":return"dashboard";case"panel":return"panel"}throw new Error("Unsupported kind"+T)}},49904:(ne,F,t)=>{t.d(F,{N:()=>m});var e=t(32264),u=t(10096),n=t(31678);function x(i,D){return D?u.contextSrv.hasPermissionInMetadata(i,D):u.contextSrv.hasPermission(i)}function L(i){return i&&!e.$.featureToggles.nestedFolders?!1:e.$.featureToggles.accessActionSets?x(n.AccessControlAction.FoldersCreate,i):x(n.AccessControlAction.FoldersCreate)&&x(n.AccessControlAction.FoldersWrite,i)}function m(i){const D=x(n.AccessControlAction.DashboardsCreate,i),M=L(i),S=x(n.AccessControlAction.FoldersDelete,i),P=x(n.AccessControlAction.DashboardsWrite,i),E=x(n.AccessControlAction.FoldersWrite,i),d=x(n.AccessControlAction.FoldersPermissionsWrite,i),b=x(n.AccessControlAction.FoldersPermissionsRead,i);return{canCreateDashboards:D,canCreateFolders:M,canDeleteFolders:S,canEditDashboards:P,canEditFolders:E,canSetPermissions:d,canViewPermissions:b}}},19519:(ne,F,t)=>{t.d(F,{bj:()=>A});var e=t(74848),u=t(32196),n=t(32264),x=t(40845),L=t(67061),m=t(10880),i=t(55852),D=t(94354),M=t(73725),S=t(99818),P=t(8484),E=t(64161);function d(){return[{value:E.P.Folders,icon:"folder",description:(0,P.t)("search.actions.view-as-folders","View by folders")},{value:E.P.List,icon:"list-ul",description:(0,P.t)("search.actions.view-as-list","View as list")}]}function b(c){const I=c.layout??E.P.Folders;return I===E.P.Folders&&(c.query||c.sort||c.starred||c.tag.length>0)?E.P.List:I}const A=({state:c,showStarredFilter:I,showLayout:a,sortPlaceholder:f,onLayoutChange:v,onSortChange:K,onStarredFilterChange:U=()=>{},onTagFilterChange:Q,getTagOptions:J,getSortOptions:j,onDatasourceChange:X,onPanelTypeChange:re,onSetIncludePanels:q})=>{const ee=(0,x.of)(T),R=b(c),H=c.tag.length||c.starred||c.query||c.datasource||c.panel_type?[E.P.Folders]:[];return(0,e.jsxs)(L.B,{justifyContent:"space-between",alignItems:"center",children:[(0,e.jsxs)(L.B,{gap:2,alignItems:"center",children:[(0,e.jsx)(S.$,{isClearable:!1,tags:c.tag,tagOptions:J,onChange:Q}),n.$.featureToggles.panelTitleSearch&&(0,e.jsx)(m.S,{"data-testid":"include-panels",disabled:R===E.P.Folders,value:c.includePanels,onChange:()=>q(!c.includePanels),label:(0,P.t)("search.actions.include-panels","Include panels")}),I&&(0,e.jsx)("div",{className:ee.checkboxWrapper,children:(0,e.jsx)(m.S,{label:(0,P.t)("search.actions.starred","Starred"),onChange:U,value:c.starred})}),c.datasource&&(0,e.jsx)(i.$n,{icon:"times",variant:"secondary",onClick:()=>X(void 0),children:(0,e.jsxs)(P.x6,{i18nKey:"search.actions.remove-datasource-filter",children:["Datasource: ",{datasource:c.datasource}]})}),c.panel_type&&(0,e.jsxs)(i.$n,{icon:"times",variant:"secondary",onClick:()=>re(void 0),children:["Panel: ",c.panel_type]})]}),(0,e.jsxs)(L.B,{gap:2,children:[a&&(0,e.jsx)(D.z,{options:d(),disabledOptions:H,onChange:v,value:R}),(0,e.jsx)(M.r,{onChange:te=>K(te?.value),value:c.sort,getSortOptions:j,placeholder:f||(0,P.t)("search.actions.sort-placeholder","Sort"),isClearable:!0})]})]})};A.displayName="ActionRow";const T=c=>({checkboxWrapper:(0,u.css)({label:{lineHeight:"1.2"}})})},39788:(ne,F,t)=>{t.d(F,{ET:()=>c,lC:()=>b,ue:()=>P});var e=t(2543),u=t.n(e),n=t(39601),x=t(2619),L=t(33390),m=t(53477),i=t(6204),D=t(24439),M=t(64161),S=t(16757);const P={query:"",tag:[],starred:!1,layout:M.P.Folders,sort:void 0,prevSort:void 0,eventTrackingNamespace:"dashboard_search",deleted:!1},E={sort:null,starred:null,query:null,tag:null,layout:null},d=()=>localStorage.getItem(m.YU)===M.P.List?M.P.List:M.P.Folders;class b extends x.Q{constructor(){super(...arguments),this.updateLocation=(0,e.debounce)(a=>n.Ny.partial(a,!0),300),this.doSearchWithDebounce=(0,e.debounce)(()=>this.doSearch(),300),this.lastSearchTimestamp=0,this.onCloseSearch=()=>{this.updateLocation({search:null,folder:null,...E})},this.onClearSearchAndFilters=()=>{this.setStateAndDoSearch({query:"",datasource:void 0,tag:[],panel_type:void 0,starred:void 0,sort:void 0})},this.onQueryChange=a=>{this.setStateAndDoSearch({query:a})},this.onRemoveTag=a=>{this.setStateAndDoSearch({tag:this.state.tag.filter(f=>f!==a)})},this.onTagFilterChange=a=>{this.setStateAndDoSearch({tag:a})},this.onAddTag=a=>{this.state.tag&&this.state.tag.includes(a)||this.setStateAndDoSearch({tag:[...this.state.tag,a]})},this.onDatasourceChange=a=>{this.setStateAndDoSearch({datasource:a})},this.onPanelTypeChange=a=>{this.setStateAndDoSearch({panel_type:a})},this.onStarredFilterChange=a=>{const f=a.currentTarget.checked;this.setStateAndDoSearch({starred:f})},this.onClearStarred=()=>{this.setStateAndDoSearch({starred:!1})},this.onSetStarred=a=>{a!==this.state.starred&&this.setStateAndDoSearch({starred:a})},this.onSortChange=a=>{a?localStorage.setItem(m.w7,a):localStorage.removeItem(m.w7),this.state.layout===M.P.Folders?this.setStateAndDoSearch({sort:a,layout:M.P.List}):this.setStateAndDoSearch({sort:a})},this.onLayoutChange=a=>{localStorage.setItem(m.YU,a),this.state.sort&&a===M.P.Folders?this.setStateAndDoSearch({layout:a,prevSort:this.state.sort,sort:void 0}):this.setStateAndDoSearch({layout:a,sort:this.state.prevSort})},this.onSetIncludePanels=a=>{this.setStateAndDoSearch({includePanels:a}),L.A.set(m.d7,a)},this.getTagOptions=()=>{const a=this.lastQuery??{kind:["dashboard","folder"],query:"*"};return(0,D.getGrafanaSearcher)().tags(a)},this.onSearchItemClicked=a=>{(0,i.MK)(this.state.eventTrackingNamespace,{layout:this.state.layout,starred:this.state.starred,sortValue:this.state.sort,query:this.state.query,tagCount:this.state.tag?.length,includePanels:this.state.includePanels,deleted:this.state.deleted})},this.onReportSearchUsage=()=>{(0,i.Pf)(this.state.eventTrackingNamespace,{layout:this.state.layout,starred:this.state.starred,sortValue:this.state.sort,query:this.state.query,tagCount:this.state.tag?.length,includePanels:this.state.includePanels,deleted:this.state.deleted})}}initStateFromUrl(a,f=!0){const v=(0,S.N1)(n.Ny.getSearchObject());(v.query||v.datasource||v.panel_type)&&(v.layout=M.P.List);const K=d(),U=localStorage.getItem(m.w7)??void 0,Q=K===M.P.List?v.sort||U:null;this.setState({...P,...v,layout:K,sort:Q??P.sort,prevSort:U,folderUid:a,eventTrackingNamespace:a?"manage_dashboards":"dashboard_search",deleted:this.state.deleted}),f&&this.hasSearchFilters()&&this.doSearch()}setStateAndDoSearch(a){const f=a.sort||this.state.sort||localStorage.getItem(m.w7)||void 0;this.setState({sort:f,...a}),this.updateLocation({query:this.state.query.length===0?null:this.state.query,tag:this.state.tag,datasource:this.state.datasource,panel_type:this.state.panel_type,starred:this.state.starred?this.state.starred:null,sort:this.state.sort}),this.hasSearchFilters()&&this.doSearchWithDebounce()}hasSearchFilters(){return!!(this.state.query||this.state.tag.length||this.state.starred||this.state.panel_type||this.state.sort||this.state.deleted||this.state.layout===M.P.List)}getSearchQuery(){const a={query:this.state.query,tags:this.state.tag,ds_uid:this.state.datasource,panel_type:this.state.panel_type,location:this.state.folderUid,sort:this.state.sort,explain:this.state.explain,withAllowedActions:this.state.explain,starred:this.state.starred,deleted:this.state.deleted};return a.sort?.length&&!a.sort.includes("name")&&(a.kind=["dashboard","folder"]),a.query?.length||(a.query="*",a.location||(a.kind=["dashboard","folder"])),!this.state.includePanels&&!a.kind&&(a.kind=["dashboard","folder"]),a.panel_type?.length&&(a.kind=["panel"]),a}doSearch(){const a={layout:this.state.layout,starred:this.state.starred,sortValue:this.state.sort,query:this.state.query,tagCount:this.state.tag?.length,includePanels:this.state.includePanels,deleted:this.state.deleted};(0,i.J$)(this.state.eventTrackingNamespace,a),this.lastQuery=this.getSearchQuery(),this.setState({loading:!0});const f=(0,D.getGrafanaSearcher)(),v=Date.now();(this.state.starred?f.starred(this.lastQuery):f.search(this.lastQuery)).then(U=>{v>this.lastSearchTimestamp&&(this.setState({result:U,loading:!1}),this.lastSearchTimestamp=v)}).catch(U=>{(0,i.KZ)(this.state.eventTrackingNamespace,{...a,error:U?.message}),this.setState({loading:!1})})}}let A;function T(){if(!A){const a=localStorage.getItem(m.YU)??P.layout;let f=L.A.getBool(m.d7,!0);f&&(f=!1),A=new b({...P,layout:a,includePanels:f})}return A}function c(){const I=T();return[I.useState(),I]}}}]);

//# sourceMappingURL=DashboardListPage.991f634cab0f0c10727c.js.map