(this["webpackJsonpninja-app"]=this["webpackJsonpninja-app"]||[]).push([[0],{217:function(e,t,n){},406:function(e,t,n){"use strict";n.r(t);var r=n(7),c=n(2),a=n(87),i=n.n(a),s=(n(217),n(14)),o=n(9),l=n(8),j="CREATE_PROJECT_SUCCESS",u="CREATE_PROJECT_ERROR",d=n(89);n(407),n(223);d.a.initializeApp({apiKey:"AIzaSyAFXa1h1BfJPPa9gDouWAd1sfA8I1b6xOY",authDomain:"mario-plan-dae6c.firebaseapp.com",projectId:"mario-plan-dae6c",storageBucket:"mario-plan-dae6c.appspot.com",messagingSenderId:"585004367332",appId:"1:585004367332:web:559edaec8ca8bde1d79bf1"});var b=d.a.firestore();b.settings({timestampsInSnapshots:!0});var h=function(e,t){return function(n,c){var a=c().firebase.profile,i=c().firebase.auth.uid;b.collection("projects").add(Object(r.a)(Object(r.a)({},e),{},{authorFirstName:a.firstName,authorLastName:a.lastName,authorId:i,createdAt:new Date})).then((function(){t.push("/"),n(function(e){return{type:j,payload:e}}(e))})).catch((function(e){n(function(e){return{type:u,payload:e}}(e))}))}},O={SIGNIN_SUCCESS:"SIGNIN_SUCCESS",SIGNIN_ERROR:"SIGNIN_ERROR",SIGNOUT_SUCCESS:"SIGNOUT_SUCCESS",SIGNUP_SUCCESS:"SIGNUP_SUCCESS",SIGNUP_ERROR:"SIGNUP_ERROR"},p=function(e){return function(t){d.a.auth().signInWithEmailAndPassword(e.email,e.password).then((function(){t({type:O.SIGNIN_SUCCESS})})).catch((function(e){t(function(e){return{type:O.SIGNIN_ERROR,payload:e}}(e))}))}},f=function(){return function(e){d.a.auth().signOut().then((function(){e({type:O.SIGNOUT_SUCCESS})}))}},m=function(e){return function(t){d.a.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(t){return b.collection("users").doc(t.user.uid).set({firstName:e.firstName,lastName:e.lastName,initials:e.firstName[0]+e.lastName[0]})})).then((function(){t({type:O.SIGNUP_SUCCESS})})).catch((function(e){t(function(e){return{type:O.SIGNUP_ERROR,payload:e}}(e))}))}},x=n(1);var g=Object(l.b)(null,(function(e){return{signOutUser:function(){return e(f())}}}))((function(e){var t=e.signOutUser,n=e.initials;return Object(x.jsxs)("ul",{className:"right",children:[Object(x.jsx)("li",{children:Object(x.jsx)(s.c,{to:"/create",children:"New Project"})}),Object(x.jsx)("li",{children:Object(x.jsx)(s.c,{to:"/",onClick:function(){return t()},children:"Log Out"})}),Object(x.jsx)("li",{children:Object(x.jsx)(s.c,{to:"/",className:"btn btn-floating pink lighten-1",children:n})})]})}));var v=function(){return Object(x.jsxs)("ul",{className:"right",children:[Object(x.jsx)("li",{children:Object(x.jsx)(s.c,{to:"/signup",children:"Sign up"})}),Object(x.jsx)("li",{children:Object(x.jsx)(s.c,{to:"/signin",children:"Log In"})})]})};var N=Object(l.b)((function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}}))((function(e){var t=e.auth,n=e.profile,r=t.uid?Object(x.jsx)(g,{initials:n.initials}):Object(x.jsx)(v,{});return Object(x.jsx)("nav",{className:"nav-wrapper grey darken-3",children:Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)(s.b,{to:"/",className:"brand-logo",children:"MarioPlan"}),t.isLoaded&&r]})})}));var S=function(){return Object(x.jsx)("div",{children:Object(x.jsx)("p",{children:"Notifications"})})},C=n(90),E=n.n(C);var y=function(e){var t=e.project,n=E()(t.createdAt.toDate()).startOf("day").fromNow();return Object(x.jsx)("div",{className:"card project-summary",children:Object(x.jsxs)("div",{className:"card-content grey-text text-darken-3",children:[Object(x.jsx)("span",{className:"card-title",children:t.title}),Object(x.jsxs)("p",{children:["Posted by ",t.authorFirstName," ",t.authorLastName]}),Object(x.jsx)("p",{className:"grey-text",children:n})]})})};var I=function(e){var t=e.projects;return Object(x.jsx)("div",{className:"project-list section",children:t&&t.map((function(e){return Object(x.jsx)(s.b,{to:"/project/"+e.id,children:Object(x.jsx)(y,{project:e})},e.id)}))})},R=n(32),U=n(22);var P=Object(R.d)(Object(l.b)((function(e){return{loading:e.project.loading,projects:e.firestore.ordered.projects,error:e.project.error}})),Object(U.firestoreConnect)([{collection:"projects",orderBy:["createdAt","desc"]}]))((function(e){var t=e.loading,n=e.projects,r=e.error;return Object(x.jsx)("div",{className:"dashboard container",children:Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"col s12 m6",children:t?"Loading":""===r?Object(x.jsx)(I,{projects:n}):Object(x.jsx)("h3",{children:r})}),Object(x.jsx)("div",{className:"col s12 m5 offset-m1",children:Object(x.jsx)(S,{})})]})})}));var w=function(e){var t=e.match.params.id;Object(U.useFirestoreConnect)([{collection:"projects",doc:t}]);var n=Object(l.c)((function(e){return e.firestore.ordered.projects})),r=n&&1===n.length?n[0]:null,c=r&&E()(r.createdAt.toDate()).calendar();return r&&Object(x.jsx)("div",{className:"container section project-details",children:Object(x.jsxs)("div",{className:"card",children:[Object(x.jsxs)("div",{className:"card-content",children:[Object(x.jsx)("span",{className:"card-title",children:r.title}),Object(x.jsx)("p",{children:r.content})]}),Object(x.jsxs)("div",{className:"card-action grey lighten-4 grey-text",children:[Object(x.jsxs)("div",{children:["Posted by ",r.authorFirstName," ",r.authorLastName]}),Object(x.jsx)("div",{children:c})]})]})})},F=n(24);var _=Object(l.b)((function(e){return{authError:e.auth.authError}}),(function(e){return{signIn:function(t){return e(p(t))}}}))((function(e){var t=e.authError,n=e.signIn,r=Object(c.useState)(""),a=Object(F.a)(r,2),i=a[0],s=a[1],o=Object(c.useState)(""),l=Object(F.a)(o,2),j=l[0],u=l[1],d=t?Object(x.jsx)("div",{className:"red-text center",children:Object(x.jsx)("h6",{children:Object(x.jsx)("strong",{children:t.message})})}):null;return Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),n({email:i,password:j})}(e)},children:[Object(x.jsx)("h5",{className:"gray-text text-darken-3",children:"Sign In"}),d,Object(x.jsxs)("div",{className:"input-field",children:[Object(x.jsx)("label",{htmlFor:"email",children:"Email"}),Object(x.jsx)("input",{type:"email",id:"email",onChange:function(e){return s(e.target.value)},value:i})]}),Object(x.jsxs)("div",{className:"input-field",children:[Object(x.jsx)("label",{htmlFor:"password",children:"Password"}),Object(x.jsx)("input",{type:"password",id:"password",onChange:function(e){return u(e.target.value)},value:j})]}),Object(x.jsx)("div",{className:"input-field",children:Object(x.jsx)("button",{className:"btn pink lighten-1",children:"Login"})})]})})}));var G=Object(l.b)((function(e){return{authError:e.auth.authError}}),(function(e){return{signUp:function(t){return e(m(t))}}}))((function(e){var t=e.authError,n=e.signUp,r=Object(c.useState)(""),a=Object(F.a)(r,2),i=a[0],s=a[1],o=Object(c.useState)(""),l=Object(F.a)(o,2),j=l[0],u=l[1],d=Object(c.useState)(""),b=Object(F.a)(d,2),h=b[0],O=b[1],p=Object(c.useState)(""),f=Object(F.a)(p,2),m=f[0],g=f[1],v=t?Object(x.jsx)("div",{className:"red-text center",children:Object(x.jsx)("h6",{children:Object(x.jsx)("strong",{children:t.message})})}):null;return Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),n({firstName:i,lastName:j,email:h,password:m})}(e)},children:[Object(x.jsx)("h5",{className:"gray-text text-darken-3",children:"Sign Up"}),v,Object(x.jsxs)("div",{className:"input-field",children:[Object(x.jsx)("label",{htmlFor:"email",children:"Email"}),Object(x.jsx)("input",{type:"email",id:"email",onChange:function(e){return O(e.target.value)},value:h})]}),Object(x.jsxs)("div",{className:"input-field",children:[Object(x.jsx)("label",{htmlFor:"password",children:"Password"}),Object(x.jsx)("input",{type:"password",id:"password",onChange:function(e){return g(e.target.value)},value:m})]}),Object(x.jsxs)("div",{className:"input-field",children:[Object(x.jsx)("label",{htmlFor:"first-name",children:"First Name"}),Object(x.jsx)("input",{type:"text",id:"first-name",onChange:function(e){return s(e.target.value)},value:i})]}),Object(x.jsxs)("div",{className:"input-field",children:[Object(x.jsx)("label",{htmlFor:"last-name",children:"Last Name"}),Object(x.jsx)("input",{type:"text",id:"last-name",onChange:function(e){return u(e.target.value)},value:j})]}),Object(x.jsx)("div",{className:"input-field",children:Object(x.jsx)("button",{className:"btn pink lighten-1",children:"Sign up"})})]})})}));var k=Object(l.b)(null,(function(e,t){return{createProject:function(n){return e(h(n,t.history))}}}))((function(e){var t=e.createProject,n=e.history,r=Object(c.useState)(""),a=Object(F.a)(r,2),i=a[0],s=a[1],o=Object(c.useState)(""),l=Object(F.a)(o,2),j=l[0],u=l[1];return Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),t({title:i,content:j},n)}(e)},children:[Object(x.jsx)("h5",{className:"gray-text text-darken-3",children:"Create a new project"}),Object(x.jsx)("br",{}),Object(x.jsxs)("div",{className:"input-field",children:[Object(x.jsx)("label",{htmlFor:"title",children:"Title"}),Object(x.jsx)("input",{type:"text",id:"title",onChange:function(e){return s(e.target.value)},value:i})]}),Object(x.jsxs)("div",{className:"input-field",children:[Object(x.jsx)("label",{htmlFor:"content",children:"Content"}),Object(x.jsx)("textarea",{className:"materialize-textarea",id:"content",onChange:function(e){return u(e.target.value)},value:j})]}),Object(x.jsx)("div",{className:"input-field",children:Object(x.jsx)("button",{className:"btn pink lighten-1",children:"Create Project"})})]})})})),A=n(92);var L=Object(l.b)((function(e){return{auth:e.firebase.auth}}))((function(e){var t=e.auth,n=e.component,c=Object(A.a)(e,["auth","component"]);return Object(x.jsx)(o.b,Object(r.a)(Object(r.a)({},c),{},{render:function(e){return t.uid?Object(x.jsx)(n,Object(r.a)({},e)):Object(x.jsx)(o.a,{to:{pathname:"/signin",state:{from:e.location}}})}}))}));var T=Object(l.b)((function(e){return{auth:e.firebase.auth}}))((function(e){var t=e.auth,n=e.component,c=Object(A.a)(e,["auth","component"]);return Object(x.jsx)(o.b,Object(r.a)(Object(r.a)({},c),{},{render:function(e){return t.uid?Object(x.jsx)(o.a,{to:{pathname:"/",state:{from:e.location}}}):Object(x.jsx)(n,Object(r.a)({},e))}}))}));var D=function(){return Object(x.jsx)(s.a,{children:Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(N,{}),Object(x.jsxs)(o.d,{children:[Object(x.jsx)(L,{path:"/",exact:!0,component:P}),Object(x.jsx)(L,{path:"/create",component:k}),Object(x.jsx)(L,{path:"/project/:id",component:w}),Object(x.jsx)(T,{path:"/signin",component:_}),Object(x.jsx)(T,{path:"/signup",component:G})]})]})})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,408)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))},J={authError:null},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O.SIGNIN_ERROR:return console.log("Login Error",t.payload),Object(r.a)(Object(r.a)({},e),{},{authError:t.payload});case O.SIGNIN_SUCCESS:return console.log("Login Success"),Object(r.a)(Object(r.a)({},e),{},{authError:null});case O.SIGNOUT_SUCCESS:return console.log("Logout Success"),e;case O.SIGNUP_SUCCESS:return console.log("Signup Success"),Object(r.a)(Object(r.a)({},e),{},{authError:null});case O.SIGNUP_ERROR:return console.log("Signup Error",t.payload),Object(r.a)(Object(r.a)({},e),{},{authError:t.payload});default:return e}},W={loading:!1,projects:[{id:"1",title:"Help me find Peach!",content:"blah blah blah"},{id:"2",title:"Collect all the stars!",content:"blah blah blah"},{id:"3",title:"Egg hunt with Yoshi!",content:"blah blah blah"}],error:""},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:console.log("Create project success!",t.payload);break;case u:console.log("Create project error!",t.payload);break;default:return e}return e},H=n(91),K=Object(R.c)({auth:z,project:Y,firestore:H.firestoreReducer,firebase:U.firebaseReducer}),M=n(212),X=Object(R.e)(K,Object(R.a)(M.a.withExtraArgument({getFirebase:U.getFirebase})));var q=function(e){var t=e.children,n=Object(l.c)((function(e){return e.firebase.auth}));return Object(U.isLoaded)(n)?t:null},Q={firebase:d.a,config:{userProfile:"users",useFirestoreForProfile:!0},dispatch:X.dispatch,createFirestoreInstance:H.createFirestoreInstance};i.a.render(Object(x.jsx)(l.a,{store:X,children:Object(x.jsx)(U.ReactReduxFirebaseProvider,Object(r.a)(Object(r.a)({},Q),{},{children:Object(x.jsx)(q,{children:Object(x.jsx)(D,{})})}))}),document.getElementById("root")),B()}},[[406,1,2]]]);
//# sourceMappingURL=main.e6a987b4.chunk.js.map