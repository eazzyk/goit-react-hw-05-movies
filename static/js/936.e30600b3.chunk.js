"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[936],{155:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(689),a=n(87),c="MoviesList_movie__list__7GXDl",i="MoviesList_movie__item__ZR78F",s="MoviesList_list__title__R5pRk",u=n(184),o=function(e){var t=e.movies,n=(0,r.TH)();return t?(0,u.jsx)("ul",{className:c,children:t.map((function(e){var t=e.id,r=e.title,c=e.poster_path;return r&&(0,u.jsx)("li",{className:i,children:(0,u.jsxs)(a.rU,{to:"/movies/".concat(t),state:{from:n},children:[(0,u.jsx)("img",{src:c?"https://image.tmdb.org/t/p/w300"+c:"https://via.placeholder.com/300x450",width:300,height:450,alt:r}),(0,u.jsx)("h2",{className:s,children:r})]},t)},t)}))}):null}},160:function(e,t,n){n.d(t,{Ai:function(){return m},uV:function(){return g},vS:function(){return x},wr:function(){return v}});var r=n(861),a=n(757),c=n.n(a),i=n(243),s="https://api.themoviedb.org/3",u="b0417ce4f13258c76c4f7fdc636d5dbb",o="/trending/movie/week",p="/search/movie",l="/movie/",f="/credits",h="/reviews";function v(){return d.apply(this,arguments)}function d(){return d=(0,r.Z)(c().mark((function e(){var t,n,r,a,p=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=p.length>0&&void 0!==p[0]?p[0]:1,n=new URLSearchParams({language:"en-US",page:t,api_key:u}),e.next=4,i.Z.get("".concat(s).concat(o,"?").concat(n));case 4:return r=e.sent,a=r.data,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}function m(e){return _.apply(this,arguments)}function _(){return _=(0,r.Z)(c().mark((function e(t){var n,r,a,o,l=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l.length>1&&void 0!==l[1]?l[1]:1,r=new URLSearchParams({query:t,language:"en-US",page:n,api_key:u}),e.next=4,i.Z.get("".concat(s).concat(p,"?").concat(r));case 4:return a=e.sent,o=a.data,e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)}))),_.apply(this,arguments)}function g(e){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(c().mark((function e(t){var n,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams({language:"en-US",api_key:u}),e.next=3,i.Z.get("".concat(s).concat(l).concat(t).concat(f,"?").concat(n));case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return k.apply(this,arguments)}function k(){return k=(0,r.Z)(c().mark((function e(t){var n,r,a,o,p=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=p.length>1&&void 0!==p[1]?p[1]:1,r=new URLSearchParams({language:"en-US",page:n,api_key:u}),e.next=4,i.Z.get("".concat(s).concat(l).concat(t).concat(h,"?").concat(r));case 4:return a=e.sent,o=a.data,e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)}))),k.apply(this,arguments)}},867:function(e,t,n){n.d(t,{Q:function(){return r}});var r={IDLE:"idle",PENDING:"pending",REJECTED:"rejected",RESOLVED:"resolved"}},936:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(861),a=n(439),c=n(757),i=n.n(c),s=n(447),u=n(160),o=n(791),p=n(867),l=n(155),f="Home_title__L087v",h="Home_container__w+u63",v=n(184),d=function(){var e=(0,o.useState)([]),t=(0,a.Z)(e,2),n=t[0],c=t[1],d=(0,o.useState)(p.Q.IDLE),m=(0,a.Z)(d,2),_=m[0],g=m[1];return(0,o.useEffect)((function(e){var t=function(){var e=(0,r.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,g(p.Q.PENDING),e.next=4,(0,u.wr)();case 4:t=e.sent,n=t.results,c(n),g(p.Q.RESOLVED),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),g(p.Q.REJECTED);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();t()}),[]),(0,v.jsxs)("div",{className:h,children:[(0,v.jsx)("h1",{className:f,children:"Trending movies of the week"}),n.length>0&&(0,v.jsx)(l.Z,{movies:n}),_===p.Q.PENDING&&(0,v.jsx)(s.Z,{})]})}}}]);
//# sourceMappingURL=936.e30600b3.chunk.js.map