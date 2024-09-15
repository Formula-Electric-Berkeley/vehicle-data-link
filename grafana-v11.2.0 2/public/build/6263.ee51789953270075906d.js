"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[6263],{82138:(O,x,n)=>{n.d(x,{y:()=>m});var t=n(74848),y=n(32196),b=n(42418),g=n(94954),f=n(31678);const m=({initError:c})=>c?(0,t.jsx)("div",{className:P.dashboardLoading,children:(0,t.jsx)(b.F,{severity:f.AppNotificationSeverity.Error,title:c.message,children:(0,g.q)(c.error)})}):null,P={dashboardLoading:(0,y.css)({height:"60vh",display:"flex",alignItems:"center",justifyContent:"center"})}},9980:(O,x,n)=>{n.d(x,{P:()=>c});var t=n(74848),y=n(32196),b=n(39601),g=n(40845),f=n(66864),m=n(62930),P=n(55852);const c=({initPhase:h})=>{const v=(0,g.of)(R),w=()=>{b.Ny.push("/")};return(0,t.jsx)("div",{className:v.dashboardLoading,children:(0,t.jsx)("div",{className:v.dashboardLoadingText,children:(0,t.jsxs)(f.gW,{spacing:"md",children:[(0,t.jsxs)(f.Gy,{align:"center",justify:"center",spacing:"xs",children:[(0,t.jsx)(m.y,{inline:!0})," ",h]})," ",(0,t.jsx)(f.Gy,{align:"center",justify:"center",children:(0,t.jsx)(P.$n,{variant:"secondary",size:"md",icon:"repeat",onClick:w,children:"Cancel loading dashboard"})})]})})})},R=h=>{const v="0.5s",w=(0,y.keyframes)`
    0% { opacity: 0%; }
    100% { opacity: 100%; }
  `;return{dashboardLoading:(0,y.css)({height:"60vh",display:"flex",opacity:"0%",alignItems:"center",justifyContent:"center",[h.transitions.handleMotion("no-preference","reduce")]:{animation:`${w} 0s step-end ${v} 1 normal forwards`}}),dashboardLoadingText:(0,y.css)({fontSize:h.typography.h4.fontSize})}}},2118:(O,x,n)=>{n.d(x,{N:()=>ct});var t=n(74848),y=n(46942),b=n.n(y),g=n(96540),f=n(66816),m=n.n(f),P=n(64423),c=n(32264),R=n(28138),h=n(15054),v=n(16233),w=n(80484),T=n(28444),d=n(32196),G=n(84140),E=n(40845),K=n(29158),H=n(8484),U=n(16678);const k=({panel:a,dashboard:s})=>{const e=r=>{r.preventDefault(),s.removePanel(a)},i=r=>{const{gridPos:l}=a,p={...r.model,gridPos:l,libraryPanel:r};s.addPanel(p),s.removePanel(a)},o=(0,E.of)(Y);return(0,t.jsx)("div",{className:o.wrapper,children:(0,t.jsxs)("div",{className:o.callToAction,children:[(0,t.jsxs)("div",{className:(0,d.cx)(o.headerRow,"grid-drag-handle"),children:[(0,t.jsx)("span",{children:(0,t.jsx)(H.x6,{i18nKey:"library-panel.add-widget.title",children:"Add panel from panel library"})}),(0,t.jsx)("div",{className:"flex-grow-1"}),(0,t.jsx)(K.K,{"aria-label":"Close 'Add Panel' widget",name:"times",onClick:e,tooltip:"Close widget"})]}),(0,t.jsx)(U.j,{onClick:i,variant:U.s.Tight,showPanelFilter:!0})]})})},Y=a=>{const s=(0,d.keyframes)({"0%":{boxShadow:`0 0 0 2px ${a.colors.background.canvas}, 0 0 0px 4px ${a.colors.primary.main}`},"50%":{boxShadow:`0 0 0 2px ${a.components.dashboard.background}, 0 0 0px 4px ${(0,G.A)(a.colors.primary.main).darken(20).toHexString()}`},"100%":{boxShadow:`0 0 0 2px ${a.components.dashboard.background}, 0 0 0px 4px  ${a.colors.primary.main}`}});return{wrapper:(0,d.css)({height:"100%",paddingTop:`${a.spacing(.5)}`}),headerRow:(0,d.css)({display:"flex",alignItems:"center",height:"38px",flexShrink:0,width:"100%",fontSize:a.typography.fontSize,fontWeight:a.typography.fontWeightMedium,paddingLeft:`${a.spacing(1)}`,[a.transitions.handleMotion("no-preference","reduce")]:{transition:"background-color 0.1s ease-in-out"},cursor:"move","&:hover":{background:`${a.colors.background.secondary}`}}),callToAction:(0,d.css)({backgroundColor:a.components.panel.background,border:`1px solid ${a.components.panel.borderColor}`,borderRadius:a.shape.radius.default,display:"flex",flex:"1 1 0",flexDirection:"column",height:"100%",position:"relative",width:"100%",outline:"2px dotted transparent",outlineOffset:"2px",overflow:"hidden",[a.transitions.handleMotion("no-preference","reduce")]:{animation:`${s} 2s ease infinite`}})}};var Q=n(2543),W=n(13544),J=n(3591),X=n(72574),Z=n(72109),M=n(14578),A=n(45994),q=n(71678),z=n(37390),I=n(88575),_=n(10354),tt=n(42418),B=n(55852),st=n(72235),et=n(92378);const at=({repeat:a,title:s,warning:e,onUpdate:i,onCancel:o})=>{const[r,l]=(0,g.useState)(a),p=(0,g.useCallback)(u=>l(u),[l]);return(0,t.jsx)(st.l,{defaultValues:{title:s},onSubmit:u=>{i(u.title,r)},children:({register:u})=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(I.D,{label:"Title",children:(0,t.jsx)(_.p,{...u("title"),type:"text"})}),(0,t.jsx)(I.D,{label:"Repeat for",children:(0,t.jsx)(et.G,{repeat:r,onChange:p})}),e&&(0,t.jsx)(tt.F,{"data-testid":W.Tp.pages.Dashboard.Rows.Repeated.ConfigSection.warningMessage,severity:"warning",title:"",topSpacing:3,bottomSpacing:0,children:e}),(0,t.jsxs)(z.a.ButtonRow,{children:[(0,t.jsx)(B.$n,{type:"button",variant:"secondary",onClick:o,fill:"outline",children:"Cancel"}),(0,t.jsx)(B.$n,{type:"submit",children:"Update"})]})]})})},nt=({repeat:a,title:s,onDismiss:e,onUpdate:i,warning:o})=>{const r=(0,E.of)(ot);return(0,t.jsx)(z.a,{isOpen:!0,title:"Row options",icon:"copy",onDismiss:e,className:r.modal,children:(0,t.jsx)(at,{repeat:a,title:s,onCancel:e,onUpdate:i,warning:o})})},ot=()=>({modal:(0,d.css)({label:"RowOptionsModal",width:"500px"})}),$=({repeat:a,title:s,onUpdate:e,warning:i})=>{const o=r=>(l,p)=>{e(l,p),r()};return(0,t.jsx)(q.$s,{children:({showModal:r,hideModal:l})=>(0,t.jsx)("button",{type:"button",className:"pointer","aria-label":"Row options",onClick:()=>{r(nt,{title:s,repeat:a,onDismiss:l,onUpdate:o(l),warning:i})},children:(0,t.jsx)(M.I,{name:"cog"})})})};$.displayName="RowOptionsButton";class it extends g.Component{constructor(){super(...arguments),this.onVariableUpdated=()=>{this.forceUpdate()},this.onToggle=()=>{this.props.dashboard.toggleRow(this.props.panel)},this.getWarning=()=>{if((this.props.panel.panels?.length?this.props.panel.panels:this.props.dashboard.getRowPanels((0,Q.indexOf)(this.props.dashboard.panels,this.props.panel))).some(i=>i.datasource?.uid===A.K))return(0,t.jsxs)("div",{children:[(0,t.jsxs)("p",{children:["Panels in this row use the ",A.K," data source. These panels will reference the panel in the original row, not the ones in the repeated rows."]}),(0,t.jsx)(Z.Y,{external:!0,href:"https://grafana.com/docs/grafana/latest/dashboards/build-dashboards/create-dashboard/#configure-repeating-rows",children:"Learn more"})]})},this.onUpdate=(s,e)=>{this.props.panel.setProperty("title",s),this.props.panel.setProperty("repeat",e??void 0),this.props.panel.render(),this.props.dashboard.processRepeats(),this.forceUpdate()},this.onDelete=()=>{R.A.publish(new T.bY({title:"Delete row",text:"Are you sure you want to remove this row and all its panels?",altActionText:"Delete row only",icon:"trash-alt",onConfirm:()=>{this.props.dashboard.removeRow(this.props.panel,!0)},onAltAction:()=>{this.props.dashboard.removeRow(this.props.panel,!1)}}))}}componentDidMount(){this.sub=this.props.dashboard.events.subscribe(J._,this.onVariableUpdated)}componentWillUnmount(){this.sub&&this.sub.unsubscribe()}render(){const s=(0,X.w)().replace(this.props.panel.title,this.props.panel.scopedVars,"text"),e=this.props.panel.panels?this.props.panel.panels.length:0,i=e===1?"panel":"panels",o=this.props.dashboard.meta.canEdit===!0,r=this.props.panel.collapsed,l=lt(this.props.theme);return(0,t.jsxs)("div",{className:(0,d.cx)(l.dashboardRow,{[l.dashboardRowCollapsed]:r}),"data-testid":"dashboard-row-container",children:[(0,t.jsxs)("button",{"aria-expanded":!r,className:(0,d.cx)(l.title,"pointer"),type:"button","data-testid":W.Tp.components.DashboardRow.title(s),onClick:this.onToggle,children:[(0,t.jsx)(M.I,{name:r?"angle-right":"angle-down"}),s,(0,t.jsxs)("span",{className:(0,d.cx)(l.count,{[l.countCollapsed]:r}),children:["(",e," ",i,")"]})]}),o&&(0,t.jsxs)("div",{className:l.actions,children:[(0,t.jsx)($,{title:this.props.panel.title,repeat:this.props.panel.repeat,onUpdate:this.onUpdate,warning:this.getWarning()}),(0,t.jsx)("button",{type:"button",className:"pointer",onClick:this.onDelete,"aria-label":"Delete row",children:(0,t.jsx)(M.I,{name:"trash-alt"})})]}),r===!0&&(0,t.jsx)("div",{className:(0,d.cx)({[l.toggleTargetCollapsed]:r}),onClick:this.onToggle,children:"\xA0"}),o&&(0,t.jsx)("div",{"data-testid":"dashboard-row-drag",className:(0,d.cx)(l.dragHandle,"grid-drag-handle",{[l.dragHandleCollapsed]:r})})]})}}const rt=(0,E.cV)(it),lt=a=>{const s=(0,d.css)({color:a.colors.text.secondary,opacity:0,[a.transitions.handleMotion("no-preference","reduce")]:{transition:"200ms opacity ease-in 200ms"},button:{color:a.colors.text.secondary,paddingLeft:a.spacing(2),background:"transparent",border:"none","&:hover":{color:a.colors.text.maxContrast}}});return{dashboardRow:(0,d.css)({display:"flex",alignItems:"center",height:"100%","&:hover, &:focus-within":{[`.${s}`]:{opacity:1}}}),dashboardRowCollapsed:(0,d.css)({background:a.components.panel.background}),toggleTargetCollapsed:(0,d.css)({flex:1,cursor:"pointer",marginRight:"15px"}),title:(0,d.css)({flexGrow:0,fontSize:a.typography.h5.fontSize,fontWeight:a.typography.fontWeightMedium,color:a.colors.text.primary,background:"transparent",border:"none",".fa":{color:a.colors.text.secondary,fontSize:a.typography.size.xs,padding:a.spacing(0,1)}}),actions:s,count:(0,d.css)({paddingLeft:a.spacing(2),color:a.colors.text.secondary,fontStyle:"italic",fontSize:a.typography.size.sm,fontWeight:"normal",display:"none"}),countCollapsed:(0,d.css)({display:"inline-block"}),dragHandle:(0,d.css)({cursor:"move",width:"16px",height:"100%",background:'url("public/img/grab_dark.svg") no-repeat 50% 50%',backgroundSize:"8px",visibility:"hidden",position:"absolute",top:0,right:0}),dragHandleCollapsed:(0,d.css)({visibility:"visible",opacity:1})}};var dt=n(68064),ht=n(39569);const N="systemPanelFilterVar";class ct extends g.PureComponent{constructor(s){super(s),this.panelMap={},this.eventSubs=new P.yU,this.windowHeight=1200,this.windowWidth=1920,this.gridWidth=0,this.lastPanelBottom=0,this.isLayoutInitialized=!1,this.onLayoutChange=e=>{if(!this.state.panelFilter){for(const i of e)this.panelMap[i.i].updateGridPos(i,this.isLayoutInitialized);this.isLayoutInitialized&&(this.isLayoutInitialized=!0),this.props.dashboard.sortPanelsByGridPos(),this.forceUpdate()}},this.triggerForceUpdate=()=>{this.forceUpdate()},this.updateGridPos=(e,i)=>{this.panelMap[e.i].updateGridPos(e)},this.onResize=(e,i,o)=>{this.panelMap[o.i].updateGridPos(o)},this.onResizeStop=(e,i,o)=>{this.updateGridPos(o,e)},this.onDragStop=(e,i,o)=>{this.updateGridPos(o,e)},this.onGetWrapperDivRef=e=>{e&&v.TP.user.authenticatedBy!=="render"&&setTimeout(()=>{e.classList.add("react-grid-layout--enable-move-animations")},50)},this.rootEl=null,this.onMeasureRef=e=>{if(!e){this.rootEl&&this.resizeObserver&&this.resizeObserver.unobserve(this.rootEl);return}this.rootEl=e,this.resizeObserver=new ResizeObserver(i=>{i.forEach(o=>{this.setState({width:o.contentRect.width})})}),this.resizeObserver.observe(e)},this.state={panelFilter:void 0,width:document.body.clientWidth}}componentDidMount(){const{dashboard:s}=this.props;if(c.$.featureToggles.panelFilterVariable){for(const e of s.getVariables())if(e.id===N){"query"in e&&this.setPanelFilter(e.query);break}this.eventSubs.add(R.A.subscribe(w.og,e=>{if(e.payload.variable?.id===N&&"current"in e.payload.variable){let i=e.payload.variable.current;"value"in i&&typeof i.value=="string"&&this.setPanelFilter(i.value)}}))}this.eventSubs.add(s.events.subscribe(T.Q$,this.triggerForceUpdate))}componentWillUnmount(){this.eventSubs.unsubscribe()}setPanelFilter(s){let e;s.length>0&&(e=new RegExp(s,"i")),this.setState({panelFilter:e})}buildLayout(){const s=[];this.panelMap={};const{panelFilter:e}=this.state;let i=0;for(const o of this.props.dashboard.panels){if(o.key||(o.key=`panel-${o.id}-${Date.now()}`),this.panelMap[o.key]=o,!o.gridPos){console.log("panel without gridpos");continue}const r={i:o.key,x:o.gridPos.x,y:o.gridPos.y,w:o.gridPos.w,h:o.gridPos.h};o.type==="row"&&(r.w=h.cV,r.h=1,r.isResizable=!1,r.isDraggable=o.collapsed),e?e.test(o.title)&&(r.isResizable=!1,r.isDraggable=!1,r.x=i%2*h.cV,r.y=Math.floor(i/2),s.push(r),i++):s.push(r)}return s}getPanelScreenPos(s,e){let i=0;return e<c.$.theme2.breakpoints.values.md?i=this.lastPanelBottom+h.dU:i=S(s.gridPos.y)+h.dU,this.lastPanelBottom=i+S(s.gridPos.h),{top:i,bottom:this.lastPanelBottom}}renderPanels(s,e){const{panelFilter:i}=this.state,o=[];this.lastPanelBottom=0,this.gridWidth!==s&&(this.windowHeight=window.innerHeight??1e3,this.windowWidth=window.innerWidth,this.gridWidth=s);for(const r of this.props.dashboard.panels){const l=b()({"react-grid-item--fullscreen":r.isViewing}),p=(0,t.jsx)(F,{className:l,"data-panelid":r.id,gridPos:r.gridPos,gridWidth:s,windowHeight:this.windowHeight,windowWidth:this.windowWidth,isViewing:r.isViewing,children:(u,L)=>this.renderPanel(r,u,L,e)},r.key);i?i.test(r.title)&&o.push(p):o.push(p)}return o}renderPanel(s,e,i,o){return s.type==="row"?(0,t.jsx)(rt,{panel:s,dashboard:this.props.dashboard},s.key):s.type==="add-library-panel"?(0,t.jsx)(k,{panel:s,dashboard:this.props.dashboard},s.key):(0,t.jsx)(ht.L,{stateKey:s.key,panel:s,dashboard:this.props.dashboard,isEditing:s.isEditing,isViewing:s.isViewing,isDraggable:o,width:e,height:i,hideMenu:this.props.hidePanelMenus},s.key)}render(){const{isEditable:s,dashboard:e}=this.props,{width:i}=this.state;if(e.panels.length===0)return(0,t.jsx)(dt.A,{dashboard:e,canCreate:s});const o=i<=c.$.theme2.breakpoints.values.md?!1:s;return(0,t.jsx)("div",{ref:this.onMeasureRef,style:{flex:"1 1 auto",position:"relative",zIndex:1,display:this.props.editPanel?"none":void 0},children:(0,t.jsx)("div",{style:{width:i,height:"100%"},ref:this.onGetWrapperDivRef,children:(0,t.jsx)(m(),{width:i,isDraggable:o,isResizable:s,containerPadding:[0,0],useCSSTransforms:!0,margin:[h.dU,h.dU],cols:h.cV,rowHeight:h.sD,draggableHandle:".grid-drag-handle",draggableCancel:".grid-drag-cancel",layout:this.buildLayout(),onDragStop:this.onDragStop,onResize:this.onResize,onResizeStop:this.onResizeStop,onLayoutChange:this.onLayoutChange,children:this.renderPanels(i,o)})})})}}const F=g.forwardRef((a,s)=>{const e=c.$.theme2;let i=100,o=100;const{gridWidth:r,gridPos:l,isViewing:p,windowHeight:u,windowWidth:L,...V}=a,j=a.style??{};if(p)i=r,o=u*.85,j.height=o,j.width="100%";else if(L<e.breakpoints.values.md)i=a.gridWidth,o=S(l.h),j.height=o,j.width="100%";else if(a.style){const{width:D,height:C}=a.style;D!=null&&(i=typeof D=="number"?D:parseFloat(D)),C!=null&&(o=typeof C=="number"?C:parseFloat(C))}return(0,t.jsx)("div",{...V,style:{...V.style},ref:s,children:[a.children[0](i,o),a.children.slice(1)]})});function S(a){return a*(h.sD+h.dU)-h.dU}F.displayName="GridItemWithDimensions"}}]);

//# sourceMappingURL=6263.ee51789953270075906d.js.map