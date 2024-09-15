"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[9119],{57582:(Z,x,s)=>{s.r(x),s.d(x,{default:()=>F});var e=s(74848),o=s(96540),j=s(49785),D=s(41053),C=s(42418),M=s(17408),L=s(88575),B=s(10354),S=s(55852),R=s(69444),h=s(10096),A=s(31678),W=s(69546),d=s(17172),K=s(80714);const U=30,N=async n=>await(0,d.AI)().get(`/api/orgs/${n}`),E=async(n,a)=>h.contextSrv.hasPermission(A.AccessControlAction.OrgUsersRead)?(0,d.AI)().get(`/api/orgs/${n}/users/search`,(0,K.F)({perpage:U,page:a})):{orgUsers:[]},f=async(n,a)=>{const g=a.map(l=>l.userId),i=await(0,d.AI)().post("/api/access-control/users/roles/search",{userIds:g,orgId:n});a.forEach(l=>{l.roles=i?i[l.userId]||[]:[]})},$=(n,a)=>(0,d.AI)().patch(`/api/orgs/${a}/users/${n.userId}`,n),b=(n,a)=>(0,d.AI)().delete(`/api/orgs/${a}/users/${n.userId}`),I=(n,a)=>(0,d.AI)().put(`/api/orgs/${a}`,{name:n}),F=({match:n})=>{const a=parseInt(n.params.id,10),g=h.contextSrv.hasPermission(A.AccessControlAction.OrgsWrite),i=h.contextSrv.hasPermission(A.AccessControlAction.OrgUsersRead),[l,_]=(0,o.useState)([]),[P,z]=(0,o.useState)(1),[Y,T]=(0,o.useState)(1),[m,O]=(0,D.A)(()=>N(a),[]),{handleSubmit:y,register:G,formState:{errors:V}}=(0,j.mN)(),[,t]=(0,D.A)(async c=>{const u=await E(a,c);h.contextSrv.licensedAccessControlEnabled()&&await f(a,u.orgUsers);const w=u?.perPage!==0?Math.ceil(u.totalCount/u.perPage):0;return T(w),_(u.orgUsers),u.orgUsers},[]);(0,o.useEffect)(()=>{O(),t(P)},[O,t,P]);const r=async({orgName:c})=>{await I(c,a)},p=()=>(0,e.jsx)(C.F,{severity:"info",title:"Access denied",children:"You do not have permission to see users in this organization. To update this organization, contact your server administrator."}),H=c=>{z(c)},v=async c=>{await b(c,a),t(P)},J=async(c,u)=>{await $({...u,role:c},a),t(P)},Q={text:m?.value?.name??"",icon:"shield",subTitle:"Manage settings and user roles for an organization."};return(0,e.jsx)(R.Y,{navId:"global-orgs",pageNav:Q,subTitle:"Manage settings for this specific org.",children:(0,e.jsx)(R.Y.Contents,{children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(M.s,{children:"Edit organization"}),m.value&&(0,e.jsxs)("form",{onSubmit:y(r),style:{maxWidth:"600px"},children:[(0,e.jsx)(L.D,{label:"Name",invalid:!!V.orgName,error:"Name is required",disabled:!g,children:(0,e.jsx)(B.p,{...G("orgName",{required:!0}),id:"org-name-input",defaultValue:m.value.name})}),(0,e.jsx)(S.$n,{type:"submit",disabled:!g,children:"Update"})]}),(0,e.jsxs)("div",{style:{marginTop:"20px"},children:[(0,e.jsx)(M.s,{children:"Organization users"}),!i&&p(),i&&!!l.length&&(0,e.jsx)(W.b,{users:l,orgId:a,onRoleChange:J,onRemoveUser:v,changePage:H,page:P,totalPages:Y})]})]})})})}},69546:(Z,x,s)=>{s.d(x,{b:()=>F});var e=s(74848),o=s(96540),j=s(13544),D=s(12942),C=s(94753),M=s(90613),L=s(56034),B=s(14578),S=s(78369),R=s(55852),h=s(67061),A=s(48840),W=s(19384),d=s(96374),K=s(89062),U=s(85927),N=s(46334),E=s(10096),f=s(31678),$=s(5133);const b=`This user's role is not editable because it is synchronized from your auth provider.
Refer to the Grafana authentication docs for details.`,I=n=>{const a=n?.isExternallySynced;return!E.contextSrv.hasPermissionInMetadata(f.AccessControlAction.OrgUsersWrite,n)||a},X=j.Tp.pages.UserListPage.UsersListPage,F=({users:n,orgId:a,onRoleChange:g,onUserRolesChange:i,onRemoveUser:l,fetchData:_,changePage:P,page:z,totalPages:Y,rolesLoading:T})=>{const[m,O]=(0,o.useState)(null),[y,G]=(0,o.useState)([]);(0,o.useEffect)(()=>{async function t(){try{if(E.contextSrv.hasPermission(f.AccessControlAction.ActionRolesList)){let r=await(0,U.RL)(a);G(r)}}catch{console.error("Error loading options")}}E.contextSrv.licensedAccessControlEnabled()&&t()},[a]);const V=(0,o.useMemo)(()=>[{id:"avatarUrl",header:"",cell:({cell:{value:t}})=>t&&(0,e.jsx)(D.e,{src:t,alt:"User avatar"})},{id:"login",header:"Login",cell:({cell:{value:t}})=>(0,e.jsx)("div",{children:t}),sortType:"string"},{id:"email",header:"Email",cell:({cell:{value:t}})=>t,sortType:"string"},{id:"name",header:"Name",cell:({cell:{value:t}})=>t,sortType:"string"},{id:"lastSeenAtAge",header:"Last active",cell:({cell:{value:t}})=>(0,e.jsx)(e.Fragment,{children:t&&(0,e.jsx)(e.Fragment,{children:t==="10 years"?(0,e.jsx)(C.E,{color:"disabled",children:"Never"}):t})}),sortType:(t,r)=>new Date(t.original.lastSeenAt).getTime()-new Date(r.original.lastSeenAt).getTime()},{id:"role",header:"Role",cell:({cell:{value:t},row:{original:r}})=>{const p=I(r),H=async(v,J,Q)=>{await(0,U.eA)(v,J,Q),i&&i()};return E.contextSrv.licensedAccessControlEnabled()?(0,e.jsx)(K.y,{userId:r.userId,roles:r.roles,apply:!0,onApplyRoles:H,isLoading:T,orgId:a,roleOptions:y,basicRole:t,onBasicRoleChange:v=>g(v,r),basicRoleDisabled:p,basicRoleDisabledMessage:b,width:40}):(0,e.jsx)($.r,{"aria-label":"Role",value:t,disabled:p,onChange:v=>g(v,r)})}},{id:"info",header:"",cell:({row:{original:t}})=>I(t)&&(0,e.jsx)(M.a,{display:"flex",alignItems:"center",marginLeft:1,children:(0,e.jsx)(L.m,{interactive:!0,content:(0,e.jsxs)("div",{children:["This user's role is not editable because it is synchronized from your auth provider. Refer to the\xA0",(0,e.jsx)("a",{href:"https://grafana.com/docs/grafana/latest/administration/user-management/manage-org-users/#change-a-users-organization-permissions",rel:"noreferrer",target:"_blank",children:"Grafana authentication docs"}),"\xA0for details."]}),children:(0,e.jsx)(B.I,{name:"question-circle"})})})},{id:"authLabels",header:"Origin",cell:({cell:{value:t}})=>(0,e.jsx)(e.Fragment,{children:Array.isArray(t)&&t.length>0&&(0,e.jsx)(N.E,{label:t[0],removeIcon:!1,count:0})})},{id:"isDisabled",header:"",cell:({cell:{value:t}})=>(0,e.jsx)(e.Fragment,{children:t&&(0,e.jsx)(S.v,{colorIndex:9,name:"Disabled"})})},{id:"delete",header:"",cell:({row:{original:t}})=>E.contextSrv.hasPermissionInMetadata(f.AccessControlAction.OrgUsersRemove,t)&&(0,e.jsx)(R.$n,{size:"sm",variant:"destructive",onClick:()=>{O(t)},icon:"times","aria-label":`Delete user ${t.name}`})}],[T,a,y,i,g]);return(0,e.jsxs)(h.B,{direction:"column",gap:2,"data-testid":X.container,children:[(0,e.jsx)(A.j,{columns:V,data:n,getRowId:t=>String(t.userId),fetchData:_}),(0,e.jsx)(h.B,{justifyContent:"flex-end",children:(0,e.jsx)(W.d,{onNavigate:P,currentPage:z,numberOfPages:Y,hideWhenSinglePage:!0})}),!!m&&(0,e.jsx)(d.u,{body:`Are you sure you want to delete user ${m?.login}?`,confirmText:"Delete",title:"Delete",onDismiss:()=>{O(null)},isOpen:!0,onConfirm:()=>{m&&(l(m),O(null))}})]})}}}]);

//# sourceMappingURL=AdminEditOrgPage.4b8c452b48b33c549f56.js.map