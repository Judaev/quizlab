(this.webpackJsonpquizlab=this.webpackJsonpquizlab||[]).push([[0],{103:function(e,t,s){},107:function(e,t,s){},18:function(e,t,s){e.exports={main:"ProfilePage_main__1Mt7q",headerProfile:"ProfilePage_headerProfile__2LpRo",userName:"ProfilePage_userName__3Vtxu",subscriptions:"ProfilePage_subscriptions__1Lblo",subButton:"ProfilePage_subButton__d3l83",footer:"ProfilePage_footer__npiVf",backButton:"ProfilePage_backButton__1GIbj",addPost:"ProfilePage_addPost__1hyBj"}},208:function(e,t,s){"use strict";s.r(t);var n,a=s(0),i=s.n(a),c=s(46),r=s.n(c),o=(s(103),s(8)),u=s(10),b=s(7),j=(s(107),s(37)),l=s.n(j),d=function(e){return e?void 0:"Error message"},h=s(30),m=s(97),O=s(2),f=function(e){var t=e.input,s=e.meta,n=Object(m.a)(e,["input","meta"]),a=s.error&&s.touched;return Object(O.jsxs)("div",{children:[a&&Object(O.jsx)("span",{children:s.error}),Object(O.jsx)("div",{children:Object(O.jsx)("input",Object(h.a)(Object(h.a)({},t),n))})]})},_="SET_USER_DATA",x={userId:null,userName:null,subscriptions:0,subscribers:0,isAuth:!1},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(h.a)(Object(h.a)({},e),{},{userName:t.userName,isAuth:!0});default:return e}},N=s(211),p=s(210),g=(n=12,function(e){return e.length>n?"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 ".concat(n," \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"):void 0}),v=Object(p.a)({form:"login"})((function(e){return Object(O.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(O.jsx)("div",{children:Object(O.jsx)(N.a,{validate:[d,g],className:l.a.input,name:"userName",component:f})}),Object(O.jsx)("div",{children:Object(O.jsx)("button",{className:l.a.button,children:"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c"})})]})})),k=Object(u.b)((function(e){return{isAuth:e.authPage.isAuth}}),{login:function(e){return function(t){t(function(e){return{type:_,userName:e}}(e))}}})((function(e){return e.isAuth?Object(O.jsx)(b.a,{to:"/profile"}):Object(O.jsxs)("div",{className:l.a.main,children:[Object(O.jsx)("div",{className:l.a.title,children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f"}),Object(O.jsx)(v,{onSubmit:function(t){e.login(t.userName)}})]})})),A=s(96),w=s(20),B=s(18),S=s.n(B),y=s(25),F=s.n(y),I=s.p+"static/media/like.665ede1a.svg",E=Object(u.b)((function(e){return{userName:e.authPage.userName,subscriptions:e.authPage.subscriptions,subscribers:e.authPage.subscribers}}),{})((function(e){return Object(O.jsxs)("div",{className:F.a.main,children:[Object(O.jsxs)("div",{className:F.a.header,children:[Object(O.jsx)("div",{className:F.a.userName,children:e.userName}),Object(O.jsx)("img",{className:F.a.like,src:I})]}),Object(O.jsx)("div",{className:F.a.content,children:"\u042f \u0442\u0435\u043f\u0435\u0440\u044c \u044f\u0432\u043b\u044f\u044e\u0441\u044c \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u043c \u0432 Quiz Lab!!!"}),Object(O.jsx)("div",{className:F.a.likeCount,children:"\u041f\u043e\u043d\u0440\u0430\u0432\u0438\u043f\u043e\u0441\u044c: \u041c\u043d\u0435 \u0438 \u0432\u0430\u043c"})]})})),M=s.p+"static/media/add.1b5b6dde.svg",L=function(){return Object(O.jsx)("div",{children:"\u041f\u0440\u0438\u0432\u0435\u0442"})},q=Object(u.b)((function(e){return{userName:e.authPage.userName,subscriptions:e.authPage.subscriptions,subscribers:e.authPage.subscribers}}),{})((function(e){var t=Object(a.useState)(!1),s=Object(A.a)(t,2),n=s[0],i=s[1];return Object(O.jsxs)("div",{className:S.a.main,children:[Object(O.jsxs)("div",{className:S.a.headerProfile,children:[Object(O.jsxs)("div",{className:S.a.userName,children:[e.userName,","]}),Object(O.jsxs)("div",{className:S.a.subscriptions,children:[e.subscriptions," \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0438,"]}),Object(O.jsxs)("div",{className:S.a.subscribers,children:[e.subscribers," \u043f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u043e\u0432"]})]}),Object(O.jsx)("button",{className:S.a.subButton,children:"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"}),Object(O.jsx)(E,{}),Object(O.jsx)(E,{}),Object(O.jsx)(E,{}),Object(O.jsxs)("div",{className:S.a.footer,children:[Object(O.jsx)(w.b,{to:"/feed",className:S.a.backButton,children:"\u0412 \u043b\u0435\u043d\u0442\u0443"}),Object(O.jsx)("img",{className:S.a.addPost,src:M,onClick:function(){return i(!0)}})]}),n&&Object(O.jsx)(L,{})]})})),z=s(49),Q=s.n(z),T=function(e){return Object(O.jsxs)("div",{className:Q.a.main,children:[Object(O.jsxs)("div",{className:Q.a.postFilter,children:[Object(O.jsx)("button",{children:"\u0412\u0441\u0435 \u043f\u043e\u0441\u0442\u044b"}),Object(O.jsx)("button",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u043a\u0438"})]}),Object(O.jsx)(E,{}),Object(O.jsx)(E,{}),Object(O.jsx)(E,{}),Object(O.jsx)(w.b,{to:"/profile",className:Q.a.footer,children:"\u0412 \u043f\u0440\u043e\u0444\u0438\u043b\u044c"})]})},V=Object(o.d)(Object(u.b)((function(e){return{isAuth:e.authPage.isAuth}}),{}))((function(e){return Object(O.jsxs)("div",{children:[Object(O.jsx)(b.b,{exact:!0,path:"/",render:function(){return Object(O.jsx)(k,{})}}),Object(O.jsx)(b.b,{path:"/profile",render:function(){return Object(O.jsx)(q,{})}}),Object(O.jsx)(b.b,{path:"/feed",render:function(){return Object(O.jsx)(T,{})}})]})})),C=s(212),J=s(95),R=Object(o.c)({authPage:P,form:C.a}),W=Object(o.e)(R,Object(o.a)(J.a));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(w.a,{children:Object(O.jsx)(u.a,{store:W,children:Object(O.jsx)(V,{})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},25:function(e,t,s){e.exports={main:"ProfilePosts_main__15kvM",header:"ProfilePosts_header__345lj",userName:"ProfilePosts_userName__Mu1ZZ",like:"ProfilePosts_like__2IVrf"}},37:function(e,t,s){e.exports={main:"AuthPage_main__3ETh2",title:"AuthPage_title__NkoQL",input:"AuthPage_input__1Mpy9",button:"AuthPage_button__INt1S"}},49:function(e,t,s){e.exports={main:"FeedPage_main__2NIH4",postFilter:"FeedPage_postFilter__1nv1O",footer:"FeedPage_footer__2a4Qk"}}},[[208,1,2]]]);
//# sourceMappingURL=main.96dc591d.chunk.js.map