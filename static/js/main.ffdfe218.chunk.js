(this.webpackJsonptwitcoders=this.webpackJsonptwitcoders||[]).push([[0],{28:function(e,t,a){e.exports=a(47)},33:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),o=a.n(c),l=(a(33),a(5)),i=a.n(l),s=a(9),u=a(23),m=a(7),d=a.n(m),f=(a(35),a(37),{apiKey:"AIzaSyB0HiBNNJwQ_sMVNJpKI5ZbDOsOlR569kc",authDomain:"twitter-5fc71.firebaseapp.com",databaseURL:"https://twitter-5fc71.firebaseio.com",projectId:"twitter-5fc71",storageBucket:"twitter-5fc71.appspot.com",messagingSenderId:"1064221797911",appId:"1:1064221797911:web:051fbbead5dfb994e67652",measurementId:"G-KRNV8GQYRC"}),h=new function e(){var t=this;Object(u.a)(this,e),this.login=function(){var e=Object(s.a)(i.a.mark((function e(a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.auth.signInWithPopup(t["".concat(a,"Provider")]);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.logout=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.auth.signOut();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),d.a.initializeApp(f),this.auth=d.a.auth(),this.facebookProvider=new d.a.auth.FacebookAuthProvider,this.googleProvider=new d.a.auth.GoogleAuthProvider,this.db=Object(m.firestore)()},p=a(4),g=function(){var e=Object(n.useState)(null),t=Object(p.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){var e=h.auth.onAuthStateChanged((function(e){r(e||null)}));return function(){return e()}}),[]),a},b=a(24),v=a.n(b);var E=function(){var e=g();return r.a.createElement("div",{className:"header"},r.a.createElement("h1",{className:"header-title"},"Twitter"),e?r.a.createElement("button",{type:"button",onClick:function(){return h.logout()},className:"login-btn"}," Logout "):r.a.createElement(v.a,{onClick:function(){return h.login("google")}}))};var w=function(e){var t=e.handleSubmit,a=e.handleKeyDown,n=e.handleChange,c=e.values,o=e.errors,l=e.photoProfil;return r.a.createElement("form",{className:"message-form-container",onSubmit:t},r.a.createElement("div",{className:"message-form"},r.a.createElement("div",null,r.a.createElement("img",{className:"profil-picture",src:l,alt:"profil"})),r.a.createElement("textarea",{value:c,onChange:n,onKeyDown:a,style:{resize:"none"},name:"message",placeholder:"Quoi de neuf ?"})),o.message?r.a.createElement("p",{className:"error-text"},o.message):null,r.a.createElement("footer",null,r.a.createElement("p",null,280-c.length),r.a.createElement("button",{type:"submit",disabled:0==c.length||c.length>280},"Twitter")))},k=a(13);var O=function(e,t,a){var r=Object(n.useState)(e),c=Object(p.a)(r,2),o=c[0],l=c[1],i=Object(n.useState)({}),s=Object(p.a)(i,2),u=s[0],m=s[1],d=Object(n.useState)(!1),f=Object(p.a)(d,2),h=f[0],g=f[1];return Object(n.useEffect)((function(){h&&(0!=Object.keys(u)?g(!1):(t(),g(!1),l(e)))}),[h,t,u,e]),{handleSubmit:function(e){e.preventDefault();var t=a(o);m(t),g(!0)},handleKeyDown:function(e){if(13===e.keyCode){e.preventDefault();var t=a(o);m(t),g(!0)}},handleChange:function(e){e.persist(),l((function(){return Object(k.a)({},e.target.name,e.target.value)}))},value:o,errors:u}},j=function(e){var t={};return e.message?e.message.length>280&&(t.message="Le message fait plus de 280 caract\xe8res"):t.message="Le message est requis",t},y={message:"",Messages:{}};var N=function(){var e=g(),t=O(y,function(){var t=Object(s.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={message:o.message,postedBy:{id:e.uid,name:e.displayName},like:[],createAt:Date.now(),photo:e.photoURL},t.next=3,h.db.collection("messages").add(a);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),j),a=t.handleSubmit,n=t.handleKeyDown,c=t.handleChange,o=t.value,l=t.errors;return r.a.createElement(r.a.Fragment,null,e?r.a.createElement(w,{photoProfil:e.photoURL,handleKeyDown:n,handleChange:c,handleSubmit:a,values:o.message,errors:l}):null)},S=a(25),B=a(26),C=a(8),x=a(50),D=a(51),L=a(27);var A=function(e){var t=e.children,a=e.color,n=e.count,c=e.isLike,o=Object(L.a)(e,["children","color","count","isLike"]);return r.a.createElement("div",Object.assign({className:"icon-group ".concat(c?"icon-isLike":null)},o),r.a.createElement("div",{className:"icon-container icon-".concat(a)},t),n>0&&r.a.createElement("p",{className:"icon-text icon-text-".concat(a)},n))};var I=function(e){var t=e.newMessage,a=e.user,c=Object(n.useState)(!1),o=Object(p.a)(c,2),l=o[0],i=o[1];return Object(n.useEffect)((function(){if(a){var e=t.like.some((function(e){return e.likeBy.id==a.uid}));i(e)}}),[t.like,a]),r.a.createElement("div",{className:"message-container"},r.a.createElement("div",null,r.a.createElement("img",{className:"profil-picture",src:t.photo,alt:"profil"})),r.a.createElement("div",{className:"message"},r.a.createElement("header",null,r.a.createElement("h3",null,t.postedBy.name),r.a.createElement("span",null," \u2022  ",Object(x.a)(t.createAt,{locale:D.a}))),r.a.createElement("p",null,t.message),a?r.a.createElement("footer",null,r.a.createElement(A,{color:"blue",count:"1"},r.a.createElement(C.b,null)),r.a.createElement(A,{color:"green"},r.a.createElement(C.c,null)),r.a.createElement(A,{color:"red",onClick:function(){i((function(e){return!e}));var e=h.db.collection("messages").doc(t.id);if(l){var n=t.like.filter((function(e){return e.likeBy.id!==a.uid}));e.update({like:n})}else{var r={likeBy:{id:a.uid,name:a.displayName}},c=[].concat(Object(B.a)(t.like),[r]);e.update({like:c})}},count:t.like.length,isLike:l},r.a.createElement(C.a,null)),r.a.createElement(A,{color:"blue"},r.a.createElement(C.d,null)),r.a.createElement(A,{color:"red",onClick:function(){a&&t.postedBy.id==a.uid&&h.db.collection("messages").doc(t.id).delete()}},r.a.createElement(C.e,null))):null))};var K=function(){var e=g(),t=Object(n.useState)([]),a=Object(p.a)(t,2),c=a[0],o=a[1],l=function(e){var t=e.docs.map((function(e){return Object(S.a)({id:e.id},e.data())}));o(t)};return Object(n.useEffect)((function(){h.db.collection("messages").orderBy("createAt","desc").onSnapshot(l)}),[h]),r.a.createElement("div",null,c.map((function(t,a){return r.a.createElement(I,{newMessage:t,key:a,user:e})})))},P=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(E,null),r.a.createElement(N,null),r.a.createElement(K,null))};a(44),a(45),a(46),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[28,1,2]]]);
//# sourceMappingURL=main.ffdfe218.chunk.js.map