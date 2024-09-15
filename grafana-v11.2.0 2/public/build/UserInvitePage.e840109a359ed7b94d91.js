"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[7720],{91230:(L,o,a)=>{a.r(o),a.d(o,{UserInvitePage:()=>h,default:()=>R});var n=a(74848),r=a(69444),x=a(10096),j=a(49785),g=a(71733),u=a(39601),f=a(72109),I=a(84167),l=a(88575),d=a(10354),S=a(60029),m=a(67061),p=a(56034),F=a(14578),U=a(94354),E=a(15292),c=a(55852),N=a(2913),e=a(31678),y=a(72235),O=a(47259);const v=(0,n.jsxs)(n.Fragment,{children:['You can now select the "No basic role" option and add permissions to your custom needs. You can find more information in\xA0',(0,n.jsx)(f.Y,{href:"https://grafana.com/docs/grafana/latest/administration/roles-and-permissions/#organization-roles",variant:"bodySmall",external:!0,children:"our documentation"}),"."]}),z=Object.values(e.OrgRole).map(s=>({label:s===e.OrgRole.None?"No basic role":s,value:s})),B={name:"",email:"",role:e.OrgRole.Editor,sendEmail:!0},D=()=>{const s=(0,e.useDispatch)(),Y=async t=>{await s((0,O.KU)(t)).unwrap(),u.Ny.push("/admin/users/")};return(0,n.jsx)(y.l,{defaultValues:B,onSubmit:Y,children:({register:t,control:P,errors:i})=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(I.n,{children:[(0,n.jsx)(l.D,{invalid:!!i.loginOrEmail,error:i.loginOrEmail?"Email or username is required":void 0,label:"Email or username",children:(0,n.jsx)(d.p,{...t("loginOrEmail",{required:!0}),placeholder:"email@example.com"})}),(0,n.jsx)(l.D,{invalid:!!i.name,label:"Name",children:(0,n.jsx)(d.p,{...t("name"),placeholder:"(optional)"})}),(0,n.jsx)(l.D,{invalid:!!i.role,label:(0,n.jsx)(S.J,{children:(0,n.jsxs)(m.B,{gap:.5,children:[(0,n.jsx)("span",{children:"Role"}),v&&(0,n.jsx)(p.m,{placement:"right-end",interactive:!0,content:v,children:(0,n.jsx)(F.I,{name:"info-circle",size:"xs"})})]})}),children:(0,n.jsx)(j.xI,{render:({field:{ref:G,...C}})=>(0,n.jsx)(U.z,{...C,options:z}),control:P,name:"role"})}),(0,n.jsx)(l.D,{label:"Send invite email",children:(0,n.jsx)(E.d,{id:"send-email-switch",...t("sendEmail")})})]}),(0,n.jsxs)(m.B,{children:[(0,n.jsx)(c.$n,{type:"submit",children:"Submit"}),(0,n.jsx)(c.z9,{href:g.I.assureBaseUrl((0,N.zj)().appSubUrl+"/admin/users"),variant:"secondary",children:"Back"})]})]})})};function h(){const s=(0,n.jsxs)(n.Fragment,{children:["Send invitation or add existing Grafana user to the organization.",(0,n.jsxs)("span",{className:"highlight-word",children:[" ",x.contextSrv.user.orgName]})]});return(0,n.jsx)(r.Y,{navId:"global-users",pageNav:{text:"Invite user"},subTitle:s,children:(0,n.jsx)(r.Y.Contents,{children:(0,n.jsx)(D,{})})})}const R=h}}]);

//# sourceMappingURL=UserInvitePage.e840109a359ed7b94d91.js.map