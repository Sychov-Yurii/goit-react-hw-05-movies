"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[115],{115:function(e,n,t){t.r(n);var r,a,o,c=t(861),s=t(439),i=t(168),u=t(757),p=t.n(u),l=t(791),h=t(340),d=t(924),m=t(689),f=t(87),x=t(184),b=d.ZP.form(r||(r=(0,i.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: 20px;\n  margin-top: 20px;\n"]))),v=d.ZP.input(a||(a=(0,i.Z)(["\n  margin-right: 10px;\n  padding: 5px;\n"]))),g=d.ZP.button(o||(o=(0,i.Z)(["\n  padding: 5px 10px;\n  background-color: #4b4bbe;\n  color: white;\n  border: none;\n  cursor: pointer;\n\n  &:hover {\n    background-color: #3a3a8e;\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: 0 0 0 3px rgba(75, 75, 190, 0.5);\n  }\n"])));n.default=function(){var e=(0,l.useState)(null),n=(0,s.Z)(e,2),t=n[0],r=n[1],a=(0,l.useState)(""),o=(0,s.Z)(a,2),i=o[0],u=o[1],d=(0,m.TH)();(0,l.useEffect)((function(){var e=function(){var e=(0,c.Z)(p().mark((function e(){var n;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.Z.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:"04b4d601805ac31a2739906707e3a331",query:i,page:1}});case 3:n=e.sent,r(n.data.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error making API request:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();i&&e()}),[i]);return(0,x.jsxs)("div",{children:[(0,x.jsxs)(b,{onSubmit:function(e){e.preventDefault(),u(e.target.elements.search.value)},children:[(0,x.jsx)(v,{type:"text",name:"search",placeholder:"Search movies..."}),(0,x.jsx)(g,{type:"submit",children:"Search"})]}),t?t.map((function(e){return(0,x.jsx)("div",{children:(0,x.jsx)(f.rU,{to:{pathname:"/movies/".concat(e.id),state:{from:d.pathname}},children:e.title})},e.id)})):null]})}}}]);
//# sourceMappingURL=115.22055051.chunk.js.map