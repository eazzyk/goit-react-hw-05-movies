"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{76:function(e,n,t){t.r(n),t.d(n,{default:function(){return w}});var r=t(861),a=t(439),c=t(757),s=t.n(c),u=t(689),i=t(499),o=t(791),p=t(334),l=t(447),f=t(23),h="Cast_container__iz+ye",d="Cast_list__GlWio",m="Cast_item__a0CDL",v="Cast_img__-isbW",g="Cast_name__6UbFm",_=t(184),w=function(){var e=(0,o.useState)([]),n=(0,a.Z)(e,2),t=n[0],c=n[1],w=(0,o.useState)(i.Q.IDLE),x=(0,a.Z)(w,2),y=x[0],E=x[1],k=(0,u.UO)().movieId;return(0,o.useEffect)((function(){function e(){return(e=(0,r.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.uV)(k);case 3:n=e.sent,c(n.cast),E(i.Q.RESOLVED),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),E(i.Q.REJECTED);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}E(i.Q.PENDING),function(){e.apply(this,arguments)}()}),[k]),y===i.Q.PENDING?(0,_.jsx)(l.Z,{}):y===i.Q.RESOLVED?(0,_.jsxs)("div",{className:h,children:[(0,_.jsx)("h2",{children:"Cast"}),t.length>0?(0,_.jsx)("ul",{className:d,children:null===t||void 0===t?void 0:t.map((function(e){var n=e.id,t=e.profile_path,r=e.name,a=e.character;return(0,_.jsxs)("li",{className:m,children:[(0,_.jsx)("img",{className:v,src:t?"https://image.tmdb.org/t/p/w300/".concat(t):f,alt:r,loading:"lazy"}),r&&(0,_.jsxs)("p",{className:g,children:["Name: ",r]}),a&&(0,_.jsxs)("p",{className:g,children:["Character: ",a]})]},n)}))}):(0,_.jsx)("p",{children:"no cast list"})]}):y===i.Q.REJECTED?(0,_.jsx)("p",{children:"Something went wrong"}):void 0}},334:function(e,n,t){t.d(n,{Ai:function(){return v},Ny:function(){return _},uV:function(){return x},vS:function(){return E},wr:function(){return d}});var r=t(861),a=t(757),c=t.n(a),s=t(243),u="https://api.themoviedb.org/3",i="b0417ce4f13258c76c4f7fdc636d5dbb",o="/trending/movie/week",p="/search/movie",l="/movie/",f="/credits",h="/reviews";function d(){return m.apply(this,arguments)}function m(){return m=(0,r.Z)(c().mark((function e(){var n,t,r,a,p=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=p.length>0&&void 0!==p[0]?p[0]:1,t=new URLSearchParams({language:"en-US",page:n,api_key:i}),e.next=4,s.Z.get("".concat(u).concat(o,"?").concat(t));case 4:return r=e.sent,a=r.data,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)}))),m.apply(this,arguments)}function v(e){return g.apply(this,arguments)}function g(){return g=(0,r.Z)(c().mark((function e(n){var t,r,a,o,l=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.length>1&&void 0!==l[1]?l[1]:1,r=new URLSearchParams({query:n,language:"en-US",page:t,api_key:i}),e.next=4,s.Z.get("".concat(u).concat(p,"?").concat(r));case 4:return a=e.sent,o=a.data,e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}function _(e){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(c().mark((function e(n){var t,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new URLSearchParams({append_to_response:"movies",language:"en-US",api_key:i}),e.next=3,s.Z.get("".concat(u).concat(l).concat(n,"?").concat(t));case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(c().mark((function e(n){var t,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new URLSearchParams({language:"en-US",api_key:i}),e.next=3,s.Z.get("".concat(u).concat(l).concat(n).concat(f,"?").concat(t));case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e){return k.apply(this,arguments)}function k(){return k=(0,r.Z)(c().mark((function e(n){var t,r,a,o,p=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=p.length>1&&void 0!==p[1]?p[1]:1,r=new URLSearchParams({language:"en-US",page:t,api_key:i}),e.next=4,s.Z.get("".concat(u).concat(l).concat(n).concat(h,"?").concat(r));case 4:return a=e.sent,o=a.data,e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)}))),k.apply(this,arguments)}},499:function(e,n,t){t.d(n,{Q:function(){return r}});var r={IDLE:"idle",PENDING:"pending",REJECTED:"rejected",RESOLVED:"resolved"}},23:function(e,n,t){e.exports=t.p+"static/media/no_poster.ac7703603ec269547856.jpg"}}]);
//# sourceMappingURL=76.d5be3f5a.chunk.js.map