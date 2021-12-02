(this["webpackJsonpcse183-assignment8-frontend"]=this["webpackJsonpcse183-assignment8-frontend"]||[]).push([[0],{106:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(47),r=n.n(s),i=n(13),j=n(26),o=n(157),l=n(153),b=n(161),d=n(155),x=n(162),h=n(156),O=n(163),u=n(151),p=n(141),m=n(78),g=n.n(m),f=n(2),v=Object(p.a)((function(e){return{box:{display:"flex",justifyContent:"flex-start",bgcolor:"background.paper"},search:{display:"flex",alignItems:"center"}}}));var y=function(){var e=v(),t=JSON.parse(localStorage.getItem("user")),n=a.a.useState(t?t.name:""),c=Object(i.a)(n,2),s=c[0],r=c[1];return Object(f.jsxs)("div",{children:[Object(f.jsx)(o.a,{className:e.box,sx:{position:"sticky",p:2,m:2},children:Object(f.jsx)(l.a,{children:Object(f.jsx)(b.a,{children:Object(f.jsxs)(d.a,{container:!0,direction:"row",justifyContent:"space-between",alignItems:"center",children:[Object(f.jsx)(d.a,{item:!0,children:Object(f.jsx)(x.a,{variant:"h6",children:"Facebook"})}),Object(f.jsx)(d.a,{item:!0,children:s?Object(f.jsxs)("div",{children:[Object(f.jsx)("label",{children:s}),Object(f.jsx)("button",{disabled:!s,onClick:function(){localStorage.removeItem("user"),r("")},children:"Logout"})]}):Object(f.jsx)(h.a,{variant:"contained",children:Object(f.jsx)(j.b,{to:"/Login",children:"Sign In"})})})]})})})}),Object(f.jsx)(o.a,{className:e.box,sx:{position:"absolute",p:2,m:-2},children:Object(f.jsxs)(d.a,{container:!0,spacing:1,children:[Object(f.jsx)(d.a,{item:!0,xs:"auto",children:Object(f.jsx)(O.a,{variant:"extended",children:"Sell"})}),Object(f.jsx)(d.a,{item:!0,xs:"auto",children:Object(f.jsx)(O.a,{variant:"extended",children:Object(f.jsx)(j.b,{to:"/Categories",children:"All Categories"})})})]})}),Object(f.jsx)(o.a,{className:e.box,sx:{position:"absolute",left:"-55px",p:4,m:4},children:Object(f.jsx)(d.a,{children:Object(f.jsx)(d.a,{item:!0,sx:{border:1,borderRadius:"8px"},children:Object(f.jsxs)("div",{className:e.search,children:[Object(f.jsx)(g.a,{}),Object(f.jsx)(u.a,{placeholder:" Search"})]})})})})]})},w=n(14);function S(){var e=c.useState({email:"",password:""}),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(w.g)(),r=function(e){var t=e.target,c=t.value,s=t.name,r=n;r[s]=c,a(r)};return Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),fetch("/authenticate",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).then((function(e){if(!e.ok)throw e;return e.json()})).then((function(e){console.log(e),localStorage.setItem("user",JSON.stringify(e)),s.push("/")})).catch((function(e){console.log(e),alert("Error logging in, please try again")}))},children:[Object(f.jsx)("input",{type:"email",name:"email",placeholder:"Email",onChange:r,required:!0}),Object(f.jsx)("input",{type:"password",name:"password",placeholder:"Password",onChange:r,required:!0}),Object(f.jsx)("input",{type:"submit",value:"Login"})]})}function C(){return Object(f.jsxs)(o.a,{sx:{flexGrow:1},children:[Object(f.jsx)("div",{children:Object(f.jsx)(j.b,{exact:!0,to:"/home",children:"Back  "})}),"Sign in here",Object(f.jsx)(S,{}),Object(f.jsx)(j.b,{to:"/new-user",children:"Create Account"})]})}function k(){var e=c.useState({email:"",password:""}),t=Object(i.a)(e,2),n=t[0],a=t[1],s=function(e){var t=e.target,c=t.value,s=t.name,r=n;r[s]=c,a(r)};return Object(f.jsxs)("form",{onSubmit:function(e){},children:[Object(f.jsx)("input",{type:"email",name:"email",placeholder:"Email",onChange:s,required:!0}),Object(f.jsx)("input",{type:"password",name:"password",placeholder:"Password",onChange:s,required:!0}),Object(f.jsx)("input",{type:"submit",value:"Create"})]})}function I(){return Object(f.jsxs)(o.a,{sx:{flexGrow:1},children:["Create Account Here",Object(f.jsx)(k,{}),Object(f.jsx)(j.b,{exact:!0,to:"/login",children:"Back  "})]})}var N=n(158),P=n(152),J=n(150),q=n(159),B=n(160),E=n(67),L=n.n(E),A=n(80),G=n.n(A);function R(){return Object(f.jsxs)(o.a,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:[Object(f.jsx)("nav",{"aria-label":"main mailbox folders",children:Object(f.jsxs)(N.a,{children:[Object(f.jsx)(P.a,{disablePadding:!0,children:Object(f.jsxs)(J.a,{children:[Object(f.jsx)(q.a,{children:Object(f.jsx)(L.a,{})}),Object(f.jsx)(B.a,{primary:"Retrieve"})]})}),Object(f.jsx)(P.a,{disablePadding:!0,children:Object(f.jsxs)(J.a,{children:[Object(f.jsx)(q.a,{children:Object(f.jsx)(G.a,{})}),Object(f.jsx)(B.a,{primary:"List"})]})}),Object(f.jsx)(P.a,{disablePadding:!0,children:Object(f.jsxs)(J.a,{children:[Object(f.jsx)(q.a,{children:Object(f.jsx)(L.a,{})}),Object(f.jsx)(B.a,{primary:"of categories"})]})})]})}),Object(f.jsx)(j.b,{exact:!0,to:"/home",children:"Back  "})]})}var T=function(){return Object(f.jsx)(j.a,{children:Object(f.jsxs)(w.d,{children:[Object(f.jsx)(w.b,{path:"/home",component:y}),Object(f.jsx)(w.b,{path:"/login",component:C}),Object(f.jsx)(w.b,{path:"/categories",component:R}),Object(f.jsx)(w.b,{path:"/new-user",component:I}),Object(f.jsx)(w.a,{to:"/home"})]})})};r.a.render(Object(f.jsx)(T,{}),document.getElementById("root"))}},[[106,1,2]]]);
//# sourceMappingURL=main.8045c9f7.chunk.js.map