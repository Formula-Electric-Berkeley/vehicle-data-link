"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[5857],{96589:(Ue,pe,d)=>{d.d(pe,{w:()=>J});var p=d(74848),Q=d(32196),U=d(96540),_=d(40845);const Ve=10,J=({colorPalette:S,min:k,max:N,display:L,hoverValue:M,useStopsPercentage:ee})=>{const[te,F]=(0,U.useState)([]),[b,K]=(0,U.useState)({isShown:!1,value:0}),[T,ve]=(0,U.useState)(null),ie=(0,_.$j)(),H=Le(ie,te);(0,U.useEffect)(()=>{F(i({colorArray:S,stops:Ve,useStopsPercentage:ee}))},[S,ee]);const $e=X=>{const le=X.nativeEvent.offsetX,xe=X.currentTarget.offsetWidth,ye=Math.floor(le*100/xe+1),Pe=Math.floor((N-k)*ye/100+k);K({isShown:!0,value:Pe}),ve(ye)},ge=()=>{K({isShown:!1,value:0})};return(0,U.useEffect)(()=>{ve(M==null?null:he((M-k)/(N-k)))},[M,k,N]),(0,p.jsxs)("div",{className:H.scaleWrapper,onMouseMove:$e,onMouseLeave:ge,children:[(0,p.jsx)("div",{className:H.scaleGradient,children:L&&(b.isShown||M!==void 0)&&(0,p.jsx)("div",{className:H.followerContainer,children:(0,p.jsx)("div",{className:H.follower,style:{left:`${T}%`}})})}),L&&(0,p.jsxs)("div",{className:H.followerContainer,children:[(0,p.jsxs)("div",{className:H.legendValues,children:[(0,p.jsx)("span",{className:H.disabled,children:L(k)}),(0,p.jsx)("span",{className:H.disabled,children:L(N)})]}),T!=null&&(b.isShown||M!==void 0)&&(0,p.jsx)("span",{className:H.hoverValue,style:{left:`${T}%`},children:L(M??b.value)})]})]})},i=({colorArray:S,stops:k,useStopsPercentage:N=!0})=>{const L=S.length;if(N&&L<=20){const F=1/L*100;let b=0;const K=[];for(const T of S)b>0?K.push(`${T} ${b}%`):K.push(T),b+=F,K.push(`${T} ${b}%`);return K}const M=S[L-1],ee=Math.ceil(L/k),te=new Set;for(let F=0;F<L;F+=ee)te.add(S[F]);return te.add(M),[...te]};function he(S){return S>1?100:S<0?0:S*100}const Le=(S,k)=>({scaleWrapper:(0,Q.css)({width:"100%",fontSize:"11px",opacity:1}),scaleGradient:(0,Q.css)({background:`linear-gradient(90deg, ${k.join()})`,height:"9px",pointerEvents:"none",borderRadius:S.shape.radius.default}),legendValues:(0,Q.css)({display:"flex",justifyContent:"space-between",pointerEvents:"none"}),hoverValue:(0,Q.css)({position:"absolute",marginTop:"-14px",padding:"3px 15px",transform:"translateX(-50%)"}),followerContainer:(0,Q.css)({position:"relative",pointerEvents:"none",whiteSpace:"nowrap"}),follower:(0,Q.css)({position:"absolute",height:"13px",width:"13px",borderRadius:S.shape.radius.default,transform:"translateX(-50%) translateY(-50%)",border:`2px solid ${S.colors.text.primary}`,top:"5px"}),disabled:(0,Q.css)({color:S.colors.text.disabled})})},26235:(Ue,pe,d)=>{d.r(pe),d.d(pe,{plugin:()=>xt});var p=d(74848),Q=d(65158),U=d(37055),_=d(11261),Ve=d(27310),J=d(32264),i=d(52622),he=d(38248),Le=d(11404),S=d(96589),k=d(27825),N=d(3290),L=d(32196),M=d(96540),ee=d(94624),te=d(97152),F=d(40845),b=d(79041),K=d(67266),T=d(81297),ve=d(68268),ie=d(38761),H=d(62567),$e=d(7874),ge=d(36613),X=d(41260),le=d(83195),xe=d(28240),ye=d(11389),Pe=d(58749),Je=d(52415),Se=d(79871),Xe=d(14792),Ze=d(1819),qe=d(21164),_e=d(22731),et=d(82915);function tt(e,r,a,s,t,l,c){let u=e.current?.getContext("2d");if(u!=null){let n=l;for(;s[n-1]===s[l];)n--;let o=n+c,x=0,v=n;for(;v<o;){let $=t[v];x=Math.max(x,$),v++}let D=new Path2D,G=new Path2D;v=n;let Y=0;for(;v<o;){let $=t[v];if($>0){let O=$/x,R=Y/c,C=v===l?D:G;const w=r*R+1,W=r/c-1;C.rect(w,Math.round(a*(1-O)),W,Math.round(a*O))}v++,Y++}u.clearRect(0,0,r,a),u.fillStyle="#2E3036",u.fill(G),u.fillStyle="#5794F2",u.fill(D)}}const Ee=(e,r)=>{const a=e.heatmapColors?.palette,s=e.heatmapColors?.values[r];let t;return s!=null&&(t=a[s]),{cellColor:t,colorPalette:a}},Ae={year:1e3*60*60*24*365,month:1e3*60*60*24*30,week:1e3*60*60*24*7,day:1e3*60*60*24,h:1e3*60*60,m:1e3*60,s:1e3,ms:1},at=new Set(["ms","s","m","h"]),lt=e=>{let r=1,a="ms";for(a in Ae)if(e>=Ae[a]){r=Math.floor(e/Ae[a]);break}const t=r!==1&&!at.has(a)?a+"s":a;return`${r} ${t}`},ke=(e,r,a)=>{let s;switch(r){case"x":s=a?e?.fields.find(({name:t})=>t==="x"||t==="xMin"||t==="xMax"):e?.fields[0];break;case"y":s=a?e?.fields.find(({name:t})=>t==="y"||t==="yMin"||t==="yMax"):e?.fields[1];break;case"count":s=a?e?.fields.find(({name:t})=>t==="count"):e?.fields[2];break}return s},He=(e,r)=>{let a=e.heatmap.fields,s=a.find(u=>u.name==="xMax"),t=a.find(u=>u.name==="yMin"),l=a.find(u=>u.name==="yMax"),c=s.config.interval;return{xBucketMin:s.values[r]-c,xBucketMax:s.values[r],yBucketMin:t.values[r],yBucketMax:l.values[r]}},nt=e=>e.seriesIdx===2?(0,p.jsx)(Ze.e,{data:e.dataRef.current.exemplars,rowIndex:e.dataIdxs[2],header:"Exemplar",padding:8}):(0,p.jsx)(st,{...e}),Oe=264,ot=64,st=({dataIdxs:e,dataRef:r,showHistogram:a,isPinned:s,showColorScale:t=!1,mode:l,annotate:c,maxHeight:u,maxWidth:h})=>{const n=e[1],o=r.current,[x]=(0,M.useState)(()=>o.heatmap?.meta?.type===X.m.HeatmapCells&&!(0,N.Nb)(o.heatmap)),v=ke(o.heatmap,"x",x),D=ke(o.heatmap,"y",x),G=ke(o.heatmap,"count",x),Y=g=>v?.display?(0,le.cN)(v.display(g)):v?.type===_.PU.time?(0,Xe.UA)().getCurrent()?.formatDate(g,"YYYY-MM-DD HH:mm:ss"):`${g}`,$=v.values,O=D.values,R=G.values,C=(0,N.eE)(o.heatmap),w=D?.display?g=>(0,le.cN)(D.display(g)):g=>`${g}`;let W=v?.config.interval,f,j,I,P,ne,oe=[];const E=g=>g%(o.yBucketCount??1);let V=E(n);const z=Math.floor(n/(o.yBucketCount??1)),ae=(g=n)=>{if(C.yOrdinalDisplay){const y=o.yLayout===i.D7.le?V-1:V,A=o.yLayout===i.D7.le?V:V+1;f=y<0?C.yMinDisplay:`${C.yOrdinalDisplay[y]}`,j=`${C.yOrdinalDisplay[A]}`,(!C.yOrdinalLabel||Number.isNaN(+C.yOrdinalLabel[0]))&&(ne=o.yLayout===i.D7.le?j:f)}else{const y=O?.[V];if(o.yLayout===i.D7.le)if(j=`${y}`,o.yLog){let B=(o.yLog===2?Math.log2:Math.log10)(y)-1/o.yLogSplit;f=`${o.yLog**B}`}else f=`${y-o.yBucketSize}`;else if(f=`${y}`,o.yLog){let B=(o.yLog===2?Math.log2:Math.log10)(y)+1/o.yLogSplit;j=`${o.yLog**B}`}else j=`${y+o.yBucketSize}`}o.xLayout===i.D7.le?(P=$[g],I=P-o.xBucketSize):(I=$[g],P=I+o.xBucketSize)};x?{xBucketMin:I,xBucketMax:P,yBucketMin:f,yBucketMax:j}=He(o,n):ae();const{cellColor:we,colorPalette:Z}=Ee(o,n),de=(g,y)=>{let A=[];for(let B=g;B<=y;B++){if(!R?.[B])continue;const se=Ee(o,B).cellColor;q=De(B),x?{xBucketMin:I,xBucketMax:P,yBucketMin:f,yBucketMax:j}=He(o,B):(V=E(B),ae(B));const{label:Nt,value:Ct}=me()[0];A.push({label:Nt,value:Ct,color:se??"#FFF",isActive:n===B})}return A},me=()=>{const g=l===i.$N.Multi&&!s;if(ne)return g?[{label:`Name ${ne}`,value:o.display(q)}]:[{label:"Name",value:ne}];switch(o.yLayout){case i.D7.unknown:return g?[{label:w(f),value:o.display(q)}]:[{label:"",value:w(f)}]}return g?[{label:`Bucket ${w(f)}-${w(j)}`,value:o.display(q)}]:[{label:"Bucket",value:`${w(f)}-${w(j)}`}]},De=g=>R?.[g];let q=De(n);if(l===i.$N.Single||s){const g=W?[{label:"Duration",value:lt(W)}]:[];oe=[{label:(0,xe.Ct)(G,o.heatmap),value:o.display(q),color:we??"#FFF",colorPlacement:Se.lJ.trailing,colorIndicator:Se.fX.value},...me(),...g]}if(l===i.$N.Multi&&!s){let g=v.values[n],y=n,A=n;for(;v.values[y-1]===g;)y--;for(;v.values[A+1]===g;)A++;de(y,A).forEach(se=>{oe.push({label:se.label,value:se.value,color:se.color??"#FFF",colorIndicator:Se.fX.value,colorPlacement:Se.lJ.trailing,isActive:se.isActive})})}let fe;if(s){let g=[];const y=o.series?.fields[V+1];if(y!=null){const A=!y.config.custom?.hideFrom?.tooltip,B=(y.config.links?.length??0)>0;A&&B&&(g=(0,qe.u)(y,z))}fe=(0,p.jsx)(Pe.S,{dataLinks:g,annotate:c})}let Qe=(0,M.useRef)(null);const Te=(0,F.$j)(),yt=parseInt(Te.spacing(1),10);let Ge=Math.min(Oe,h?h-yt*2:Oe),Ye=ot,We=Math.round(Ge*ge.A.pxRatio),ze=Math.round(Ye*ge.A.pxRatio);(0,M.useEffect)(()=>{a&&$!=null&&R!=null&&l===i.$N.Single&&tt(Qe,We,ze,$,R,n,o.yBucketCount)},[n]);const St={label:"",value:Y(P)};let Ie=[];l===i.$N.Single&&(a&&!x&&Ie.push((0,p.jsx)("canvas",{width:We,height:ze,ref:Qe,style:{width:Ge+"px",height:Ye+"px"}})),Z&&t&&Ie.push((0,p.jsx)(S.w,{colorPalette:Z,min:o.heatmapColors?.minValue,max:o.heatmapColors?.maxValue,display:o.display,hoverValue:q})));const Mt=(0,F.of)(_e.$);return(0,p.jsxs)("div",{className:Mt.wrapper,children:[(0,p.jsx)(Je.A,{item:St,isPinned:s}),(0,p.jsx)(ye.o,{items:oe,isPinned:s,scrollable:(0,et.T5)({mode:l,maxHeight:u}),maxHeight:u,children:Ie?.map((g,y)=>(0,p.jsx)("div",{style:{padding:`${Te.spacing(1)} 0`},children:g},y))}),fe]})};var Re=d(90708),it=d(73060),rt=d(57875),re=d(59809),ce=d(88891);function Fe({frames:e,annotations:r,options:a,palette:s,theme:t,replaceVariables:l=u=>u,timeRange:c}){if(!e?.length)return{};(0,xe.Fm)(e);const u=r?.find(n=>n.name==="exemplar");if(u?.fields.forEach(n=>{n.getLinks=(0,Re._M)(u,n,n.state?.scopedVars??{},l)}),a.calculate){if(J.$.featureToggles.transformationsVariableSupport){const n={...a,calculation:{xBuckets:{...a.calculation?.xBuckets},yBuckets:{...a.calculation?.yBuckets}}};return n.calculation?.xBuckets?.value&&l!==void 0&&(n.calculation.xBuckets.value=l(n.calculation.xBuckets.value)),n.calculation?.yBuckets?.value&&l!==void 0&&(n.calculation.yBuckets.value=l(n.calculation.yBuckets.value)),Me((0,N.VQ)(e,{...a.calculation,timeRange:c}),u,n,s,t)}return Me((0,N.VQ)(e,{...a.calculation,timeRange:c}),u,a,s,t)}let h;for(const n of e)switch(n.meta?.type){case X.m.HeatmapCells:return(0,N.Nb)(n)?Me(n,u,a,s,t):ct(n,u,a,s,t);case X.m.HeatmapRows:h=n}if(h==null)if(e.length>1)e.every(o=>!Number.isNaN((0,re.L)(o.fields[1].state?.displayName)))&&e.sort(re.Bm),h=(0,it.Fd)({frames:e,keepDisplayNames:!0});else{let n=e[0],o=n.fields.filter(v=>v.type===_.PU.number);o.every(v=>!Number.isNaN((0,re.L)(v.state?.displayName)))?(o.sort((v,D)=>(0,re.L)(v.state?.displayName)-(0,re.L)(D.state?.displayName)),h={...n,fields:[n.fields.find(v=>v.type===_.PU.time),...o]}):h=n}return h.fields.forEach(n=>{(n.config.links?.length??0)!==0&&(n.getLinks=(0,Re._M)(h,n,n.state?.scopedVars??{},l))}),{...Me((0,N.yJ)({unit:a.yAxis?.unit,decimals:a.yAxis?.decimals,...a.rowsFrame,frame:h}),u,a,s,t),series:h}}const ct=(e,r,a,s,t)=>{if(e.meta?.type!==X.m.HeatmapCells||(0,N.Nb)(e))return{warning:"Expected sparse heatmap format",heatmap:e};Ne(e.fields[1],a.yAxis,t);const l=e.fields[3],c=Ne(l,a.cellValues,t);let[u,h]=(0,ce.g$)(l.values,a.color.min,a.color.max,a.filterValues?.le,a.filterValues?.ge);return{heatmap:e,heatmapColors:{palette:s,values:(0,ce.O4)(l.values,s,u,h),minValue:u,maxValue:h},exemplars:r,display:n=>(0,le.cN)(c(n))}},Me=(e,r,a,s,t)=>{if(e.meta?.type!==X.m.HeatmapCells)return{warning:"Expected heatmap scanlines format",heatmap:e};if(e.fields.length<2||e.length<2)return{heatmap:e};const l=(0,N.eE)(e);let c,u,h;for(const f of e.fields)switch(f.name){case"y":u=f.name;case"yMin":case"yMax":{u||(u=f.name),l.yOrdinalDisplay==null&&Ne(f,a.yAxis,t);break}case"x":case"xMin":case"xMax":c=f.name;break;default:f.type===_.PU.number&&!h&&(h=f)}if(!u)return{warning:"Missing Y field",heatmap:e};if(!u)return{warning:"Missing X field",heatmap:e};if(!h)return{warning:"Missing value field",heatmap:e};const n=Ne(h,a.cellValues,t),o=e.fields[0].values,x=e.fields[1].values,v=o.length;let D=v-x.lastIndexOf(x[0]),G=v/D,Y=x[1]-x[0],$=o[D]-o[0],[O,R]=(0,ce.g$)(h.values,a.color.min,a.color.max,a.filterValues?.le,a.filterValues?.ge),C=a.calculation?.xBuckets,w=a.calculation?.yBuckets;return{heatmap:e,heatmapColors:{palette:s,values:(0,ce.O4)(h.values,s,O,R),minValue:O,maxValue:R},exemplars:r?.length?r:void 0,xBucketSize:$,yBucketSize:Y,xBucketCount:G,yBucketCount:D,yLog:w?.scale?.log??0,xLog:C?.scale?.log??0,xLogSplit:C?.scale?.log?+(C?.value??"1"):1,yLogSplit:w?.scale?.log?+(w?.value??"1"):1,xLayout:c==="xMax"?i.D7.le:c==="xMin"?i.D7.ge:i.D7.unknown,yLayout:u==="yMax"?i.D7.le:u==="yMin"?i.D7.ge:i.D7.unknown,display:f=>(0,le.cN)(n(f))}};function Ne(e,r,a){if(r?.unit?.length||r?.decimals!=null){const{unit:s,decimals:t}=r;e.display=void 0,e.config={...e.config},s?.length&&(e.config.unit=s),t!=null&&(e.config.decimals=t)}return e.display||(e.display=(0,rt.J)({field:e,theme:a})),e.display}var je=d(21313),ut=d(37634),be=d(84140),m=d(52995);const ue=[{name:"BrBG",invert:"always"},{name:"PiYG",invert:"always"},{name:"PRGn",invert:"always"},{name:"PuOr",invert:"always"},{name:"RdBu",invert:"always"},{name:"RdGy",invert:"always"},{name:"RdYlBu",invert:"always"},{name:"RdYlGn",invert:"always"},{name:"Spectral",invert:"always"},{name:"Blues",invert:"dark"},{name:"Greens",invert:"dark"},{name:"Greys",invert:"dark"},{name:"Oranges",invert:"dark"},{name:"Purples",invert:"dark"},{name:"Reds",invert:"dark"},{name:"Turbo",invert:"light"},{name:"Cividis",invert:"light"},{name:"Viridis",invert:"light"},{name:"Magma",invert:"light"},{name:"Inferno",invert:"light"},{name:"Plasma",invert:"light"},{name:"Warm",invert:"light"},{name:"Cool",invert:"light"},{name:"Cubehelix",invert:"light",name2:"CubehelixDefault"},{name:"BuGn",invert:"dark"},{name:"BuPu",invert:"dark"},{name:"GnBu",invert:"dark"},{name:"OrRd",invert:"dark"},{name:"PuBuGn",invert:"dark"},{name:"PuBu",invert:"dark"},{name:"PuRd",invert:"dark"},{name:"RdPu",invert:"dark"},{name:"YlGnBu",invert:"dark"},{name:"YlGn",invert:"dark"},{name:"YlOrBr",invert:"dark"},{name:"YlOrRd",invert:"dark"},{name:"Rainbow",invert:"always"},{name:"Sinebow",invert:"always"}],dt=ue.find(e=>e.name==="Spectral");function Ce(e,r){const a={...m.KQ.color,...e},s=[],t=(a.steps??128)-1;if(e.mode===m.P7.Opacity){const l=(0,be.A)(r.visualization.getColorByName(e.fill)).toPercentageRgb(),c=a.scale===m.uM.Exponential?je.scalePow().exponent(a.exponent).domain([0,1]).range([0,1]):je.scaleLinear().domain([0,1]).range([0,1]);for(let u=0;u<=t;u++)l.a=c(u/t),s.push((0,be.A)(l).toString("hex8"))}else{const l=ue.find(h=>h.name===a.scheme)??dt;let c="interpolate"+(l.name2??l.name);const u=ut[c];for(let h=0;h<=t;h++){let n=u(h/t),o=n.indexOf("rgb")===0?"#"+[...n.matchAll(/\d+/g)].map(x=>(+x[0]).toString(16).padStart(2,"0")).join(""):n;s.push(o)}(l.invert==="always"||l.invert==="dark"&&r.isDark||l.invert==="light"&&r.isLight)&&s.reverse(),e.reverse&&s.reverse()}return s}const mt=({data:e,id:r,timeRange:a,timeZone:s,width:t,height:l,options:c,fieldConfig:u,eventBus:h,onChangeTimeRange:n,replaceVariables:o})=>{const x=(0,F.$j)(),v=(0,F.of)(ft),{sync:D,eventsScope:G,canAddAnnotations:Y,onSelectRange:$}=(0,b.d2)(),O=D?.()??ee.y.Off,[R,C]=(0,M.useState)(null);let w=(0,M.useRef)(a);w.current=a;const W=(0,M.useMemo)(()=>Ce(c.color,x),[c.color,x]),f=(0,M.useMemo)(()=>{try{return Fe({frames:e.series,annotations:e.annotations,options:c,palette:W,theme:x,replaceVariables:o,timeRange:a})}catch(E){return{warning:`${E}`}}},[e.series,e.annotations,c,W,x,o,a]),j=(0,M.useMemo)(()=>{let E=[],V=[];const z=(0,N.eE)(f.heatmap);return f.exemplars?.length&&(E=f.exemplars?.fields[0].values,z.yMatchWithLabel&&z.yOrdinalDisplay!=null?V=(f.exemplars?.fields.find(Z=>Z.name===z.yMatchWithLabel).values).map(Z=>z.yOrdinalLabel?.indexOf(Z)):V=f.exemplars?.fields[1].values),[null,f.heatmap?.fields.map(ae=>ae.values),[E,V]]},[f.heatmap,f.exemplars]),I=(0,M.useRef)(f);I.current=f;const P=(0,M.useMemo)(()=>{const E=I.current?.heatmap?.fields[1].config?.custom?.scaleDistribution;return(0,ce.Mv)({dataRef:I,theme:x,timeZone:s,getTimeRange:()=>w.current,cellGap:c.cellGap,hideLE:c.filterValues?.le,hideGE:c.filterValues?.ge,exemplarColor:c.exemplars?.color??"rgba(255,0,255,0.7)",yAxisConfig:c.yAxis,ySizeDivisor:E?.type===i.L4.Log?+(c.calculation?.yBuckets?.value||1):1,selectionMode:c.selectionMode})},[c,s,e.structureRev,O]),ne=()=>!f.heatmap||!c.legend.show?null:(0,p.jsx)(K.KU.Legend,{placement:"bottom",maxHeight:"20%",children:(0,p.jsx)("div",{className:v.colorScaleWrapper,children:(0,p.jsx)(S.w,{hoverValue:void 0,colorPalette:W,min:I.current.heatmapColors?.minValue,max:I.current.heatmapColors?.maxValue,display:f.display})})});if(f.warning||!f.heatmap)return(0,p.jsx)(te.a,{panelId:r,fieldConfig:u,data:e,needsNumberField:!0,message:f.warning});const oe=!!(Y&&Y());return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(K.KU,{width:t,height:l,legend:ne(),children:(E,V)=>(0,p.jsxs)(T.Z,{config:P,data:j,width:E,height:V,children:[O!==ee.y.Off&&(0,p.jsx)(ve.K,{config:P,eventBus:h,frame:f.series??f.heatmap}),c.tooltip.mode!==i.$N.None&&(0,p.jsx)(ie.xl,{config:P,hoverMode:c.tooltip.mode===i.$N.Single?ie.b3.xOne:ie.b3.xAll,queryZoom:n,onSelectRange:$,syncMode:O,syncScope:G,render:(z,ae,we,Z,de,me,De)=>{if(oe&&me!=null){C(me),de();return}const q=()=>{let fe=z.posToVal(z.cursor.left,"x");C({from:fe,to:fe}),de()};return(0,p.jsx)(nt,{mode:De?i.$N.Multi:c.tooltip.mode,dataIdxs:ae,seriesIdx:we,dataRef:I,isPinned:Z,dismiss:de,showHistogram:c.tooltip.yHistogram,showColorScale:c.tooltip.showColorScale,panelData:e,annotate:oe?q:void 0,maxHeight:c.tooltip.maxHeight,maxWidth:c.tooltip.maxWidth})},maxWidth:c.tooltip.maxWidth}),(0,p.jsx)(H.W,{annotations:e.annotations??[],config:P,timeZone:s,newRange:R,setNewRange:C,canvasRegionRendering:!1}),(0,p.jsx)($e.U,{config:P,onChangeTimeRange:n})]},P.uid)})})},ft=()=>({colorScaleWrapper:(0,L.css)({marginLeft:"25px",padding:"10px 0",maxWidth:"300px"})}),pt=e=>{if(Object.keys(e.options??{}).length===0)return Ke(e,"heatmap",{angular:e},e.fieldConfig);let r=e.options?.tooltip?.show;return r!==void 0&&(r===!0?e.options.tooltip.mode=i.$N.Single:r===!1&&(e.options.tooltip.mode=i.$N.None),delete e.options.tooltip?.show),e.options},Ke=(e,r,a,s)=>{if(r==="heatmap"&&a.angular){const{fieldConfig:t,options:l}=ht({...a.angular,fieldConfig:s});return e.fieldConfig=t,l}if(r==="heatmap-new"){const{bucketFrame:t,...l}=e.options;return t?{...l,rowsFrame:t}:e.options}return{}};function ht(e){const r={defaults:{},overrides:[]},a=e.dataFormat!=="tsbuckets",s={...m.KQ.calculation},t={logBase:1,...e.yAxis};a&&(e.xBucketSize?s.xBuckets={mode:i.J1.Size,value:`${e.xBucketSize}`}:e.xBucketNumber&&(s.xBuckets={mode:i.J1.Count,value:`${e.xBucketNumber}`}),e.yBucketSize?s.yBuckets={mode:i.J1.Size,value:`${e.yBucketSize}`}:e.xBucketNumber&&(s.yBuckets={mode:i.J1.Count,value:`${e.yBucketNumber}`}),t.logBase>1&&(s.yBuckets={mode:i.J1.Count,value:+t.splitFactor>0?`${t.splitFactor}`:void 0,scale:{type:i.L4.Log,log:t.logBase}}));const l=Be(e.cards?.cardPadding,2),c={calculate:a,calculation:s,color:{...m.KQ.color,steps:128},cellGap:l||1,cellRadius:Be(e.cards?.cardRound),yAxis:{axisPlacement:t.show===!1?i.vM.Hidden:i.vM.Left,reverse:!!e.reverseYBuckets,axisWidth:Be(t.width),min:t.min,max:t.max,unit:t.format,decimals:t.decimals},cellValues:{decimals:Be(e.tooltipDecimals)},rowsFrame:{layout:vt(e.yBucketBound)},legend:{show:!!e.legend?.show},showValue:i.yL.Never,tooltip:{mode:e.tooltip?.show?i.$N.Single:i.$N.None,yHistogram:!!e.tooltip?.showHistogram},exemplars:{...m.KQ.exemplars}};e.hideZeroBuckets&&(c.filterValues={...m.KQ.filterValues});const u=e.color??{};switch(u?.mode){case"spectrum":{c.color.mode=m.P7.Scheme;const h=u.colorScheme;let n=ue.find(o=>o.name===h);n||(n=ue.find(o=>h.indexOf(o.name)>=0)),c.color.scheme=n?n.name:m.KQ.color.scheme;break}case"opacity":{c.color.mode=m.P7.Opacity,c.color.scale=u.scale;break}}return c.color.fill=u.cardColor,c.color.min=u.min,c.color.max=u.max,typeof u.min=="number"&&typeof u.max=="number"&&u.min>u.max&&(c.color.min=u.max,c.color.max=u.min,c.color.reverse=!0),{fieldConfig:r,options:c}}function vt(e){switch(e){case"upper":return i.D7.ge;case"lower":return i.D7.le;case"middle":return i.D7.unknown}return i.D7.auto}function Be(e,r){if(e==null||e==="")return r;const a=+e;return isNaN(a)?r:a}class gt{getSuggestionsForData(r){const{dataSummary:a}=r;if(!r.data?.series||!a.hasData||a.timeFieldCount<1||a.numberFieldCount<2||a.numberFieldCount>10)return;const s=Ce(m.KQ.color,J.$.theme2),t=Fe({frames:r.data.series,options:m.KQ,palette:s,theme:J.$.theme2});!t||t.warning||r.getListAppender({name:"",pluginId:"heatmap",options:{},fieldConfig:{defaults:{custom:{}},overrides:[]}})}}const xt=new Q.m(mt).useFieldConfig({disableStandardOptions:Object.values(U.uo).filter(e=>e!==U.uo.Links),useCustomConfig:e=>{e.addCustomEditor({id:"scaleDistribution",path:"scaleDistribution",name:"Y axis scale",category:["Heatmap"],editor:he.W,override:he.W,defaultValue:{type:i.L4.Linear},shouldApply:r=>r.type===_.PU.number,process:Ve.hS,hideFromDefaults:!0}),(0,Le.e)(e)}}).setPanelChangeHandler(Ke).setMigrationHandler(pt).setPanelOptions((e,r)=>{const a=r.options??m.KQ;let s=!1;if(r.data.length>0)try{const l=Ce(a.color,J.$.theme2),c=Fe({frames:r.data,options:a,palette:l,theme:J.$.theme2});s=(0,N.eE)(c.heatmap).yOrdinalDisplay!=null}catch{}let t=["Heatmap"];e.addRadio({path:"calculate",name:"Calculate from data",defaultValue:m.KQ.calculate,category:t,settings:{options:[{label:"Yes",value:!0},{label:"No",value:!1}]}}),a.calculate&&(0,k.J)("calculation.",e,a.calculation,t),t=["Y Axis"],e.addRadio({path:"yAxis.axisPlacement",name:"Placement",defaultValue:m.KQ.yAxis.axisPlacement??i.vM.Left,category:t,settings:{options:[{label:"Left",value:i.vM.Left},{label:"Right",value:i.vM.Right},{label:"Hidden",value:i.vM.Hidden}]}}).addUnitPicker({category:t,path:"yAxis.unit",name:"Unit",defaultValue:void 0,settings:{isClearable:!0}}).addNumberInput({category:t,path:"yAxis.decimals",name:"Decimals",settings:{placeholder:"Auto"}}),s||e.addNumberInput({path:"yAxis.min",name:"Min value",settings:{placeholder:"Auto"},category:t}).addTextInput({path:"yAxis.max",name:"Max value",settings:{placeholder:"Auto"},category:t}),e.addNumberInput({path:"yAxis.axisWidth",name:"Axis width",defaultValue:m.KQ.yAxis.axisWidth,settings:{placeholder:"Auto",min:5},category:t}).addTextInput({path:"yAxis.axisLabel",name:"Axis label",defaultValue:m.KQ.yAxis.axisLabel,settings:{placeholder:"Auto"},category:t}),a.calculate||e.addRadio({path:"rowsFrame.layout",name:"Tick alignment",defaultValue:m.KQ.rowsFrame?.layout??i.D7.auto,category:t,settings:{options:[{label:"Auto",value:i.D7.auto},{label:"Top (LE)",value:i.D7.le},{label:"Middle",value:i.D7.unknown},{label:"Bottom (GE)",value:i.D7.ge}]}}),e.addBooleanSwitch({path:"yAxis.reverse",name:"Reverse",defaultValue:m.KQ.yAxis.reverse===!0,category:t}),t=["Colors"],e.addRadio({path:"color.mode",name:"Mode",defaultValue:m.KQ.color.mode,category:t,settings:{options:[{label:"Scheme",value:m.P7.Scheme},{label:"Opacity",value:m.P7.Opacity}]}}),e.addColorPicker({path:"color.fill",name:"Color",defaultValue:m.KQ.color.fill,category:t,showIf:l=>l.color.mode===m.P7.Opacity}),e.addRadio({path:"color.scale",name:"Scale",defaultValue:m.KQ.color.scale,category:t,settings:{options:[{label:"Exponential",value:m.uM.Exponential},{label:"Linear",value:m.uM.Linear}]},showIf:l=>l.color.mode===m.P7.Opacity}),e.addSliderInput({path:"color.exponent",name:"Exponent",defaultValue:m.KQ.color.exponent,category:t,settings:{min:.1,max:2,step:.1},showIf:l=>l.color.mode===m.P7.Opacity&&l.color.scale===m.uM.Exponential}),e.addSelect({path:"color.scheme",name:"Scheme",description:"",defaultValue:m.KQ.color.scheme,category:t,settings:{options:ue.map(l=>({value:l.name,label:l.name}))},showIf:l=>l.color.mode!==m.P7.Opacity}),e.addSliderInput({path:"color.steps",name:"Steps",defaultValue:m.KQ.color.steps,category:t,settings:{min:2,max:128,step:1}}).addBooleanSwitch({path:"color.reverse",name:"Reverse",defaultValue:m.KQ.color.reverse,category:t}).addCustomEditor({id:"__scale__",path:"__scale__",name:"",category:t,editor:()=>{const l=Ce(a.color,J.$.theme2);return(0,p.jsx)("div",{children:(0,p.jsx)(S.w,{colorPalette:l,min:1,max:100})})}}),e.addNumberInput({path:"color.min",name:"Start color scale from value",defaultValue:m.KQ.color.min,settings:{placeholder:"Auto (min)"},category:t}).addNumberInput({path:"color.max",name:"End color scale at value",defaultValue:m.KQ.color.max,settings:{placeholder:"Auto (max)"},category:t}),t=["Cell display"],a.calculate||e.addTextInput({path:"rowsFrame.value",name:"Value name",defaultValue:m.KQ.rowsFrame?.value,settings:{placeholder:"Value"},category:t}),e.addUnitPicker({category:t,path:"cellValues.unit",name:"Unit",defaultValue:void 0,settings:{isClearable:!0}}).addNumberInput({category:t,path:"cellValues.decimals",name:"Decimals",settings:{placeholder:"Auto"}}),e.addSliderInput({name:"Cell gap",path:"cellGap",defaultValue:m.KQ.cellGap,category:t,settings:{min:0,max:25}}).addNumberInput({path:"filterValues.le",name:"Hide cells with values <=",defaultValue:m.KQ.filterValues?.le,settings:{placeholder:"None"},category:t}).addNumberInput({path:"filterValues.ge",name:"Hide cells with values >=",defaultValue:m.KQ.filterValues?.ge,settings:{placeholder:"None"},category:t}),t=["Tooltip"],e.addRadio({path:"tooltip.mode",name:"Tooltip mode",category:t,defaultValue:i.$N.Single,settings:{options:[{value:i.$N.Single,label:"Single"},{value:i.$N.Multi,label:"All"},{value:i.$N.None,label:"Hidden"}]}}),e.addBooleanSwitch({path:"tooltip.yHistogram",name:"Show histogram (Y axis)",defaultValue:m.KQ.tooltip.yHistogram,category:t,showIf:l=>l.tooltip.mode===i.$N.Single}),e.addBooleanSwitch({path:"tooltip.showColorScale",name:"Show color scale",defaultValue:m.KQ.tooltip.showColorScale,category:t,showIf:l=>l.tooltip.mode===i.$N.Single}),e.addNumberInput({path:"tooltip.maxWidth",name:"Max width",category:t,settings:{integer:!0},showIf:l=>l.tooltip.mode!==i.$N.None}),e.addNumberInput({path:"tooltip.maxHeight",name:"Max height",category:t,defaultValue:void 0,settings:{integer:!0},showIf:l=>l.tooltip?.mode===i.$N.Multi}),t=["Legend"],e.addBooleanSwitch({path:"legend.show",name:"Show legend",defaultValue:m.KQ.legend.show,category:t}),t=["Exemplars"],e.addColorPicker({path:"exemplars.color",name:"Color",defaultValue:m.KQ.exemplars.color,category:t})}).setSuggestionsSupplier(new gt).setDataSupport({annotations:!0})}}]);

//# sourceMappingURL=heatmapPanel.03d075c8a1e4e0ab0d47.js.map